from flask_restful import Resource
import random


class GreeterView(Resource):
    def get(self):
        greetings = ["Hallo", "Hola", "Hello", "Miaho"]
        return random.choice(greetings)
