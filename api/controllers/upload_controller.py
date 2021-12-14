import os

import logging
logger = logging.getLogger('_______')
logging.basicConfig(level=logging.DEBUG)

from tika import parser
import tika
tika.initVM()

from utils.technologies_parser import parse_technologies
from resume_parser import resumeparse

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'doc', 'docx'}
UPLOAD_FOLDER = '../temp/'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


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

        # Parse the resume fields
        data = resumeparse.read_file(file_path)
        logger.info(data)
    
        # Remove pdf from internal storage
        os.remove(file_path)

    except Exception as e: 
        logger.info(str(e)) 

def parse_resume_experiment(request):
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

        # Parse the resume fields
        raw = parser.from_file(file_path)
        file_content = raw['content']
        #logger.info(file_content)
        logger.info("Before parse technologies")
        parse_technologies(file_content)
    
        # Remove pdf from internal storage
        os.remove(file_path)

    except Exception as e: 
        logger.info(str(e)) 

    

            