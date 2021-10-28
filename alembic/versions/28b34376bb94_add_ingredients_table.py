"""Add Ingredients table

Revision ID: 28b34376bb94
Revises: d3685ce0e0db
Create Date: 2021-10-25 21:24:17.530543

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28b34376bb94'
down_revision = 'd3685ce0e0db'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "ingredients",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String(40), nullable=False),
        sa.Column("unit", sa.String(25)),
        sa.Column("quantity", sa.Integer(), nullable=True),
        sa.Column("recipe_id", sa.Integer(), sa.ForeignKey("recipe.id"))
    )


def downgrade():
    op.drop_table("ingredients")
