"""Create Recipes Table

Revision ID: df67b387b932
Revises:
Create Date: 2021-10-17 16:30:42.881132

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "df67b387b932"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "recipes",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String(255), nullable=False),
        sa.Column("description", sa.Text, nullable=False),
    )


def downgrade():
    op.drop_table("recipes")
