from flask import Flask, request 
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger('_______')

from controllers.upload_controller import parse_resume_experiment
from utils.technologies_extractor import build_set

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route('/api/upload_cv', methods=['POST'])
def upload_cv_response():
    logger.info('Received cv request...')

    parse_resume_experiment(request)
    
    response = 'File has been received'
    return response

def app_setup():
    global technologies
    technologies = build_set()
    logger.info("Skill set successfully built!")

app_setup()