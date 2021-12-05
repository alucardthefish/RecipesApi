from flask import jsonify, request
from flask_restful import Resource
from app.models.recipe import Recipe
from app.serde.recipe_schema import RecipeSchema
from app import db


class RecipesView(Resource):
    def get(self):
        recipes = Recipe.get_all()
        serializer = RecipeSchema()
        data = serializer.dump(recipes, many=True)
        return jsonify(data)

    def post(self):
        bunch_recipes = request.get_json()
        for recipe in bunch_recipes:
            tmp_recipe = Recipe(
                name=recipe.get("name"), description=recipe.get("description")
            )
            db.session.add(tmp_recipe)

        db.session.commit()
        return f"Success: {str(len(bunch_recipes))} records", 201


class RecipeView(Resource):
    def get(self, id):
        recipe = Recipe.get_by_id(id)
        serializer = RecipeSchema()
        data = serializer.dump(recipe)
        return data, 200

    def post(self):
        data = request.get_json()
        new_recipe = Recipe(name=data.get("name"), description=data.get("description"))
        new_recipe.save()
        serializer = RecipeSchema()
        data = serializer.dump(new_recipe)
        return data, 201

    def put(self, id):
        recipe_to_update = Recipe.get_by_id(id)
        data = request.get_json()
        recipe_to_update.name = data.get("name")
        recipe_to_update.description = data.get("description")
        recipe_to_update.save()

        serializer = RecipeSchema()
        recipe_data = serializer.dump(recipe_to_update)
        return recipe_data, 200

    def delete(self, id):
        recipe_to_delete = Recipe.get_by_id(id)
        recipe_to_delete.delete()
        return f"Vegan recipe with id: {id}", 204
