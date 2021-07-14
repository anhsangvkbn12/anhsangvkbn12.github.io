from flask import Flask, render_template, request,session,jsonify,render_template_string
import time
import mysql.connector
import requests
import base64
import zlib
import random

app = Flask(__name__, static_folder='static', template_folder='')
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/', methods=['GET'])
def index():
    return render_template('./index.html')

@app.route('/mobile.html', methods=['GET'])
def mobile():
    return render_template('./mobile.html')

@app.route('/map_mobile.html', methods=['GET'])
def map_mobile():
    return render_template('./map_mobile.html')

@app.route('/map.html', methods=['GET'])
def map():
    return render_template('./map.html')
    
if __name__ == '__main__':
    app.run('0.0.0.0',debug='true')
