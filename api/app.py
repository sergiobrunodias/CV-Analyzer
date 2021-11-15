from flask import Flask, jsonify, make_response, request

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route('/api/test', methods=['GET'])
def test_response():
    print("Received request from client...")

    response = "API response"
    response = make_response(jsonify(response))
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    print(response)
    return response

@app.route('/api/upload_cv', methods=['POST'])
def upload_cv_response():
    #TODO
    data = request.json
    response = make_response(jsonify(data))
    return response