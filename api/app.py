from flask import Flask, jsonify, make_response

app = Flask(__name__)

@app.route('/api/test', methods=['GET'])
def test_response():
    print("Received request from client...")

    response = "API response"
    response = make_response(jsonify(response))
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    print(response)
    return response
