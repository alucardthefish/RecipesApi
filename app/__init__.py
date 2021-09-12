from flask import Flask
from flask_sqlalchemy import SQLAlchemy


def get_app():
    app = Flask(__name__)
    app.config[
        "SQLALCHEMY_DATABASE_URI"
    ] = "postgresql://postgres:postgres@localhost:5434/recipes"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    return app


def get_db(flask_app):
    return SQLAlchemy(flask_app)


db = get_db(get_app())
