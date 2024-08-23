person = {
    'name'  : "alice",
    'age' : 23,
    'add': {
        'city':"mathura",
        'zipcode' : "53216"
    }
}
personadd =  person.get('add')
personadd= personadd.get('city')
personname= person['name']
personcity= person['add']['city']
print(personname)
print(personadd)

student = [
    {
         'name'  : "alice",
    'age' : 23,
    'add': {
        'city':"mathura",
        'zipcode' : "53216"
    }
    },
    {
         'name'  : "bob",
    'age' : 23,
    'add': {
        'city':"aligarh",
        'zipcode' : "53216"
    }
    },
    {
         'name'  : "themus",
    'age' : 23,
    'add': {
        'city':"mathura",
        'zipcode' : "53216"
    }
    },
    {
         'name'  : "fierd",
    'age' : 23,
    'add': {
        'city':"mathura",
        'zipcode' : "53216"
    }
    },
]