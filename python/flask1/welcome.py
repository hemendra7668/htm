from pymongo import MongoClient
from flask import Flask  

client = MongoClient("mongodb://localhost:27017/")
app = Flask(__name__)  

@app.route('/')  
def hello_world():  
    return 'Hello, World!'  
@app.route('/db')  
def database():  
    user = {}
    return 'Hello, World!'  



# db = client.test_database
db = client["test"]
# collection = db.test_collection
collection = db["test-collection"]

collection.insert_one({
    'name' : "kwbwe",
    'age': 25,
    
})