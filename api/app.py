from flask import Flask, request, jsonify

from controllers.upload_controller import parse_resume, match_job_notice
from utils.utils import log, build_dict_from_dataset

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route('/api/upload_cv', methods=['POST'])
def upload_cv_response():
    log('Received cv request...')

    parsed_data = parse_resume(request)
    
    return jsonify(parsed_data)

@app.route('/api/upload_job_notice', methods=['POST'])
def upload_job_notice_response():
    log('Received job notice request...')

    parsed_data = match_job_notice(request)
    
    return jsonify(parsed_data)

def app_setup():
    global technologies
    technologies = build_dict_from_dataset("technologies.txt")
    log("Skill set successfully built!")

    global universities
    universities = build_dict_from_dataset("universities.txt")
    log("Universities set successfully built!")

    global languages
    languages = build_dict_from_dataset("languages.txt")
    log("Languages set successfully built!")

    log("___________________________________")
    log("API is ready to accept connections!")


app_setup()