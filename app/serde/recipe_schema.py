from marshmallow import Schema, fields


class RecipeSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    description = fields.String()
