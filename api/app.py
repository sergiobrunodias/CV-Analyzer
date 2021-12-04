from flask import Flask, request 
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger('_______')

from controllers.upload_controller import parse_resume

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route('/api/upload_cv', methods=['POST'])
def upload_cv_response():
    logger.info('Received cv request...')

    parse_resume(request)

    response = 'File has been received'
    return response