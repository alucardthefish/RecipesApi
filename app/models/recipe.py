from app import db
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import inspect
import logging


class Recipe(db.Model):
    __tablename__ = "recipes"
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text(), nullable=False)

    def __repr__(self):
        return self.name

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.get_or_404(id)

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @hybrid_property
    def is_short_name(self):
        # info = [getattr(self, k) for (k, v) in vars(self.__class__).items()]
        mapper = inspect(self)
        logging.error(type(mapper))
        logging.error(mapper.attrs.__dict__)
        # for col in mapper.attrs:
        #     if col.key.startswith("name"):
        #         logging.error(col)
        #     logging.error(col)
        # logging.error(mapper)
        return True

    @hybrid_property
    def full_recipe(self):
        return f"({self.name}): {self.description}"
