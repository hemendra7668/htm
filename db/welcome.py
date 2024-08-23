from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")

# db = client.test_database
db = client["test-database"]
# collection = db.test_collection
collection = db["test-collection"]

collection.insert_one({
    'name' : "kwbwe",
    'age': 25,
    
})