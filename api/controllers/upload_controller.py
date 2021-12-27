from resume_parser import resumeparse
from utils.technologies_parser import parse_technologies
import tika
from tika import parser
import os
import requests
from bs4 import BeautifulSoup

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
    logger.info(job_notice_skills)
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

        # Parse the resume technologies/skills
        raw = parser.from_file(file_path)
        file_content = raw['content']
        skills = parse_technologies(file_content)

        # Parse the resume fields
        data = resumeparse.read_file(file_path)

        name = data['name']
        email = data['email']
        phone_number = data['phone']
        designations = data['designition']
        universities = data['university']

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
