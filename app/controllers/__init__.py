from flask_restful import Api
from flask import Blueprint

from app.controllers.recipe_view import RecipeView
from app.controllers.recipe_view import RecipesView
from app.controllers.user_view import UsersView
from app.controllers.user_view import UserView
from app.controllers.greeter_view import GreeterView


recipes_blueprint = Blueprint("recipes_bp", __name__, url_prefix="/vegandarina")
api = Api(recipes_blueprint)

# Set resources
api.add_resource(RecipesView, "/recipes/", endpoint="all-recipes")

api.add_resource(RecipeView, "/recipe/", endpoint="recipe")

api.add_resource(RecipeView, "/recipe/<int:id>", endpoint="update-recipe")

api.add_resource(UsersView, "/users/", endpoint="all-users")

api.add_resource(UserView, "/user/", endpoint="user")

api.add_resource(GreeterView, "/greet/", endpoint="greet")
