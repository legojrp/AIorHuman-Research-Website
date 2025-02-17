from flask import Flask, jsonify, request
from flask_cors import CORS
import post_distributor
import submit
import pandas as pd

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/api/")
def api():
    df = pd.read_csv('result.csv')
    posts = post_distributor.get_quiz(df)
    print(posts)
    return jsonify(posts)

@app.route("/api/reset")
def reset():
    result = post_distributor.get_list()
    return jsonify(result.to_dict("records"))

@app.route("/api/submit", methods=["POST"])
def submit_answers():
    data = request.get_json()
    percentage = submit.check_answers(data)
    return jsonify({"score": str(percentage)})

if __name__ == "__main__":
    app.run(port=5001, debug=True)


