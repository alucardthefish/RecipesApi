from marshmallow import Schema, fields


class UserSchema(Schema):
    id = fields.Integer()
    user_name = fields.String()
    active = fields.Boolean()
