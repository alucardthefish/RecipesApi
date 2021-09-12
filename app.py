from flask import jsonify, request
from flask_cors import CORS
import logging

from app.models.recipe import Recipe
from app.serde.recipe_schema import RecipeSchema
from app import get_app, get_db

app = get_app()
db = get_db(app)
cors = CORS(app, resources={r"/recipes*": {"origins": "*"}})


@app.route("/recipes", methods=["GET"])
def get_all_recipes():
    recipes = Recipe.get_all()
    serializer = RecipeSchema(many=True)
    data = serializer.dump(recipes)
    logging.error(data)
    changes = [
        {
            "description": "Add water, cut and squiz two lemons",
            "id": 4,
            "name": "Lemonade",
        },
        {
            "description": "Cook rice and add chopped chicked",
            "id": 6,
            "name": "Chicken Rice",
        },
    ]
    return jsonify(data, changes)


@app.route("/recipes", methods=["POST"])
def create_a_recipe():
    data = request.get_json()
    new_recipe = Recipe(name=data.get("name"), description=data.get("description"))
    new_recipe.save()
    serializer = RecipeSchema()
    data = serializer.dump(new_recipe)
    return jsonify(data), 201


@app.route("/recipes/<int:id>", methods=["GET"])
def get_recipe(id):
    recipe = Recipe.get_by_id(id)
    serializer = RecipeSchema()
    data = serializer.dump(recipe)
    return jsonify(data), 200


@app.route("/recipes/<int:id>", methods=["PUT"])
def update_recipe(id):
    recipe_to_update = Recipe.get_by_id(id)
    data = request.get_json()
    recipe_to_update.name = data.get("name")
    recipe_to_update.description = data.get("description")
    db.session.commit()

    serializer = RecipeSchema()
    recipe_data = serializer.dump(recipe_to_update)
    return jsonify(recipe_data), 200


@app.route("/recipes/<int:id>", methods=["DELETE"])
def delete_recipe(id):
    recipe_to_delete = Recipe.get_by_id(id)
    recipe_to_delete.delete()
    return jsonify({"message": "Deleted"}), 204


if __name__ == "__main__":
    app.run(debug=True)
