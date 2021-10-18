from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api


def get_app():
    app = Flask(
        __name__,
        template_folder="../static",
        static_url_path="",
        static_folder="../static",
    )
    app.config[
        "SQLALCHEMY_DATABASE_URI"
    ] = "postgresql://postgres:postgres@localhost:5434/recipes"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    return app


def get_db(flask_app):
    return SQLAlchemy(flask_app)


def get_api(flask_app):
    return Api(flask_app)


db = get_db(get_app())
api = get_api(get_app())


def init_app(app):
    db.init_app(app)

    from .controllers import recipes_blueprint

    app.register_blueprint(recipes_blueprint)

    return app
