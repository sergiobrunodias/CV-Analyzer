from utils.utils import capitalize_all, to_lower_all
from resume_parser import resumeparse
from utils.resume_info_parser import match_terms
from utils.utils import log
import tika
from tika import parser
import os
import requests
from bs4 import BeautifulSoup
import app

tika.initVM()

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'doc', 'docx'}
UPLOAD_FOLDER = '../temp/'


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def match_job_notice(request):
    content_type = request.headers.get('Content-Type')
    if content_type != 'application/json':
        return 'Content-Type not supported!' 
    
    try:
        link = request.json['link']
    except:
        job_notice_content = request.json['text']

    designations = request.json['designations']
    skills = request.json['skills']
    languages = request.json['languages']

    if 'link' in locals():
        try:
            req = requests.get(link)
        except:
            return "Invalid URL!"

        job_notice_content = BeautifulSoup(req.content, "html.parser").get_text()

    [skills_matched, designations_matched, languages_matched] = match_terms(job_notice_content, [set(to_lower_all(skills)), set(to_lower_all(designations)), set(to_lower_all(languages))])

    return {
        'skills_matched': list(map(lambda skill: app.technologies.get(skill), skills_matched)),
        'designations_matched': capitalize_all(designations_matched),
        'languages_matched': capitalize_all(languages_matched)
    }

def parse_resume(request):
    try:
        # Verify if a file was sent in the request
        if 'file' not in request.files:
            log('No file part')
            return
        file = request.files['file']

        # Verify if a non-empty file was sent
        if file.filename == '':
            log('No selected file')
            return

        # Temporarily save the file so that it can be processed
        if not allowed_file(file.filename):
            log(f'File type {file.filename} is not allowed!')
            return

        filename = file.filename

        if (not os.path.isdir(UPLOAD_FOLDER)):
            os.mkdir(UPLOAD_FOLDER)

        file_path = os.path.join(UPLOAD_FOLDER, filename)

        file.save(file_path)
        log('File has been saved!')

        raw = parser.from_file(file_path)
        file_content = raw['content']
        [skills, universities, languages] = match_terms(file_content, [app.technologies, app.universities, app.languages])

        data = resumeparse.read_file(file_path)

        name = data['name']
        email = data['email']
        phone_number = data['phone']
        designations = capitalize_all(data['designition'])
        universities_package = data['university']

        universities = list(set(universities) | set(universities_package))
        universities = capitalize_all(universities)
        skills = list(map(lambda skill: app.technologies.get(skill), skills))
        languages = capitalize_all(languages)

        # Remove pdf from internal storage
        os.remove(file_path)

        return {'name': name,
                'email': email,
                'phone_number': phone_number,
                'designations': designations,
                'universities': universities,
                'skills': skills,
                'languages': languages
                }

    except Exception as e:
        log(e)
