from app import db
from flask import request
from flask_restful import Resource
from app.models.user import User
from app.serde.user_schema import UserSchema


class UsersView(Resource):
    def get(self):
        users = User.query.all()
        serializer = UserSchema()
        data = serializer.dump(users, many=True)
        return data


class UserView(Resource):
    def post(self):
        data = request.get_json()
        new_user = User()
        new_user.user_name = data.get("user_name")
        new_user.active = data.get("active")
        db.session.add(new_user)
        db.session.commit()
        serializer = UserSchema()
        output_data = serializer.dump(new_user)
        return output_data
