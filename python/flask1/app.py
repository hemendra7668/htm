from flask import Flask, request
import pymongo
from pymongo import MongoClient
from flask import jsonify
app = Flask(__name__)
from flask_cors import CORS
cors = CORS(app, resources={r"/*": {"origins": "*"}})
client = MongoClient("mongodb://localhost:27017/")
db = client["glav1"]
# useres= db["useres"]
@app.route('/')  
def hello_world():  
    return 'Hello, World!'  

@app.route('/register', methods = ['POST'])
def register():
    input_data = request.get_json()
    name = input_data.get('username')
    email = input_data.get('email')
    password = input_data.get('password')
    user = db.useres.find_one({'email':email})
    print(user)
    if user and '_id' in user:
        return {
            'status': 0,
            'msg':"user exit",
            'class':"success"
        }
    count = db.useres.count_documents({})
    users={
        "_id":count+1,
        "name":name,
        "email":email,
        "password":password,
    }
    db.useres.insert_one(users)
    return "inserted successfully"  

@app.route('/table', methods = ['GET'])
def table():
    useres = db.useres.find()
    foundlist=[]
    for user in useres:
        foundlist.append(user)
    print(useres)
    # commit code change
    return {
        "message" : "ok",
        "foundlist":foundlist,
    }
