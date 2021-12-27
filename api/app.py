from flask import Flask, request, jsonify
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger('_______')

from controllers.upload_controller import parse_resume, match_job_notice
from utils.technologies_extractor import build_set as build_technologies_set
from utils.universities_extractor import build_set as build_universities_set

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route('/api/upload_cv', methods=['POST'])
def upload_cv_response():
    logger.info('Received cv request...')

    parsed_data = parse_resume(request)
    logger.info(parsed_data)
    
    return jsonify(parsed_data)

@app.route('/api/upload_job_notice', methods=['POST'])
def upload_job_notice_response():
    logger.info('Received job notice request...')

    parsed_data = match_job_notice(request)
    
    return jsonify(parsed_data)

def app_setup():
    global technologies
    technologies = build_technologies_set()
    logger.info("Skill set successfully built!")

    global universities
    universities = build_universities_set()
    logger.info("Universities set successfully built!")


app_setup()