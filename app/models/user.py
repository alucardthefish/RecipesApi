from app import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer(), primary_key=True)
    user_name = db.Column(db.String(35), nullable=False)
    active = db.Column(db.Boolean(), default=True)

    def __repr__(self) -> str:
        return f"ID: {self.id} - user_name: {self.user_name} - active: {self.active}"
