from flask import Flask
from pymongo import MongoClient


from flask_cors import CORS   #pip install flask_cors

app = Flask(__name__)

cors=CORS(app,resources={r"/":{"origins":""}})

client=MongoClient('mongodb://localhost:27017/')

mdb=client['gla']




@app.route("/")
def hello_world():
    return "<p>Hello, World! hemendra kumar </p>"


@app.route("/home")
def home():
    # return "<p>Hello, World! this is a home page</p>"
    return{
        "status":1,
        "message":"success",
        "payload":{
            'title':"this is home page from the flask test genertaot",
        }
    }


@app.route("/if-elif-else")
def conditional():
    value=1
    if value==2:
        return "the value is eqaul 2"
    elif value<2:
        return "the value is less the 2"

    else:
        return "this is a home page"


@app.route("/inline-if")
def inlineif():
    value=2

    # if value==1:
    msg="the value is equal to 1 " if value==1 else "the value is not eqaul to 1"
    # else:
        # msg="the value is not equal to 1"
    return msg





@app.route("/for-loop")
def forloop():
    # return "<p>Hello, World! this is a home page</p>"
    marks=[1,2,3,4,5,6,7]
    total=0

    for mark in marks:
        total=total+mark

    return {
        'status':0,
        'status':2,
        'message':'success',
        'payload':{
            'total':total,
            'values':[1,2,3,5,6,8]
        }
        
        
     }

@app.route("/while-loop")
def whileloop():
    value=1
    count=[]
    while value<10:

        value+=1
        count.append(value)
    return{
        "status":1,
        "message":"succes",
        "payload":{

            'counts':count,
            'value':value


        }
    }


@app.route("/function")
def function():
    value=add(10,12)

    return{
        "value":value
    }
  

def add(arg1,arg2):
    value=arg1+arg2
    return value




@app.route("/multiplication")
def functione():
    value=add(10,12)

    return{
        "value":value
    }
  

def add(arg1,arg2):
    value=arg1*arg2
    return value



@app.route("/db/insert")
def insert():
    users=[
        {
            "_id":4,
            "name":"rahul",
            "dept":"cse",
        },

        {
            "_id":5,
            "name":"manoj",
            "dept":"cse",

        },
        {
            "_id":6,
            "name":"raju",
            "dept":"cse",

        },

        {
            "_id":7,
            "name":"kumar",
            "dept":"cse",

        },
        {
            "_id":8,
            "name":"ragine",
            "dept":"cse",

        },
        {
            "_id":9,
            "name":"rajmata",
            "dept":"cse",

        }

    ]

    mdb.users.insert_many(users)

    return users


@app.route("/db/read")
def read():
    # user=mdb.users.find_one({'_id':5})
    # return user

    users =mdb.users.find({"name":"ragine"},{'name':0})

    foundlist=[]
    for users in users:
        foundlist.append(users)



    secoundlist=[]
    for users in users:
        secoundlist.append(users)

    # print('user',users)

    return {'foundlist':foundlist,"secoundlist":secoundlist}



# @app.route("/db/update")

# # def update():
# #     user=mdb.users.find_one({'_id':4})
# #     print('user',user)

# #     # mdb.users.update_one({'_id':4}, {'$set': {'name': 'New Name','status':'active','address':{
# #     #     'state':"up",
# #     #     'dist':"mathura",
# #     #     "location":"gla",
# #     #     "pincode":12345
# #     # }}})

# #     mdb.user.update_many({},{'$set':{'address.location':"gla noida"}})



# #     # updatuser=mdb.users.update_one({'_id':4},{'$set':{'address.location':"gla grater noida"}})


# #     updatedata=[]

# #     for user in mdb.users.find({}):
# #         updatedata.append(user)



# #     return {"upadet data is":updatedata}




@app.route("/db/remove")

def remove():
    user=mdb.users.delete_one({'_id':9})

    return{
        'status':1,
        'msg':"user removed",
        'class':"success"
    }





@app.route("/db/update")

def update():
   updatuser= mdb.users.update_one(
        {'_id':7},{'$set':{'email':"rkx1234567@gmail.com","password":1234567}} )