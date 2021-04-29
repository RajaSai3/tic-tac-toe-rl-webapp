from flask import Flask, render_template
import json
import os

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template("html/index.html")


@app.route('/getjsonfile/<string:filename>/')
def send_json_file(filename):
    
    path = os.path.join(".", "static", "json", filename)

    with open(path) as f:
        json_file = f.read()

    return json_file



if __name__ == "__main__":
    app.run(port=5500)
