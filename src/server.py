from fastapi import FastAPI
from pydantic import BaseModel
from random import randint 


storage_db = {}

app = FastAPI()


class Animals(BaseModel):
    name: str
    age: int
    genre: str
    color: str
    

@app.get('/animals')
def get_animals():
    return storage_db


@app.get('/animals/{id}')
def get_id_animals(id: int):
    if storage_db.get(id):
        return storage_db[id]

    return {'message': 'Animal not found'} 


@app.post('/animals')
def add_animals(animals: Animals):
    while True:
        id = randint(1000, 9999)
        if not storage_db.get(id):
            storage_db[id] = animals
            return {'id': id, 'message': f'{animals.name} was successfully added'}


@app.delete('/animals/{id}')
def del_animals(id: int):
    if storage_db.get(id):
        storage_db.pop(id)
        return {'message': 'Animal was deleted'} 

    return {'message': 'Animal not found'} 
    