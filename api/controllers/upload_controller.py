from resume_parser import resumeparse
from utils.resume_info_parser import match_terms
import tika
from tika import parser
import os
import requests
from bs4 import BeautifulSoup
import app

import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

tika.initVM()


ALLOWED_EXTENSIONS = {'txt', 'pdf', 'doc', 'docx'}
UPLOAD_FOLDER = '../temp/'


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def match_job_notice(request):
    req = requests.get("https://switchpayments.com/about/careers/867ebf3318ba01-android-software-engineer")
    job_notice_content = BeautifulSoup(req.content, "html.parser").get_text()

    job_notice_skills = parse_technologies(job_notice_content)
    skills_matched = list(set(job_notice_skills) & set(["django", "c++"]))
    logger.info(skills_matched)

    designations_matched = parse_designations(job_notice_content, set(["Software Engineer"]))
    logger.info(designations_matched)

    return {"name": "name"}

def parse_resume(request):
    try:
        # Verify if a file was sent in the request
        if 'file' not in request.files:
            logger.info('No file part')
            return
        file = request.files['file']

        # Verify if a non-empty file was sent
        if file.filename == '':
            logger.info('No selected file')
            return

        # Temporarily save the file so that it can be processed
        if not allowed_file(file.filename):
            logger.info(f'File type {file.filename} is not allowed!')
            return

        filename = file.filename

        if (not os.path.isdir(UPLOAD_FOLDER)):
            os.mkdir(UPLOAD_FOLDER)

        file_path = os.path.join(UPLOAD_FOLDER, filename)

        file.save(file_path)
        logger.info('File has been saved!')

        raw = parser.from_file(file_path)
        file_content = raw['content']
        [skills, universities] = match_terms(file_content, [app.technologies, set(["university of porto"])])

        data = resumeparse.read_file(file_path)

        name = data['name']
        email = data['email']
        phone_number = data['phone']
        designations = list(map(lambda designation: designation.title().replace("Of", "of"), data['designition']))
        universities_package = data['university']

        universities = list(set(universities) | set(universities_package))
        universities = list(map(lambda university: university.title().replace("Of", "of"), universities))
        skills = list(map(lambda skill: app.technologies.get(skill), skills))

        # Remove pdf from internal storage
        os.remove(file_path)

        return {'name': name,
                'email': email,
                'phone_number': phone_number,
                'designations': designations,
                'universities': universities,
                'skills': skills
                }

    except Exception as e:
        logger.info(str(e))
