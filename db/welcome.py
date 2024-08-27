from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")

# db = client.test_database
db = client["test-database"]
# collection = db.test_0.collection
collection = db["test-collection"]

result= collection.insert_many([
    
    {
    'name' : "kwabwe",
    'age': 25,
    
},
    {
    'name' : "russel",
    'age': 20,
    
},
]
  )

print("Data inserted successfully, IDs: ", result.inserted_ids)


# deleted  = collection.delete_many({"name": "kwabwe"})
# print("deleted data", deleted)

# updated = collection.update_many({"age":20},{'$set':{"age":25}})
# print(updated)

read = collection.find()
for document in read:
  print(document)
  
 # Convert the cursor to a list
documents = list(collection.find({}))

# Print the documents
print(documents)

total_count = collection.count_documents({})


print("Total count of documents:", total_count)