from app import db


class Ingredient(db.Model):
    __tablename__ = "ingredients"

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    unit = db.Column(db.String(25), nullable=True)
    quantity = db.Column(db.Integer(), nullable=True)
    recipe_id = db.Column(db.Integer(), db.ForeignKey("recipe.id"))
