from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from Python on Render!"

@app.route('/run', methods=['POST'])
def run_code():
    data = request.json
    result = {"message": f"You sent: {data}"}
    return jsonify(result)
