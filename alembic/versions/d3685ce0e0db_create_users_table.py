"""Create Users Table

Revision ID: d3685ce0e0db
Revises: df67b387b932
Create Date: 2021-10-17 17:09:50.392617

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql.expression import null


# revision identifiers, used by Alembic.
revision = 'd3685ce0e0db'
down_revision = 'df67b387b932'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "users",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("user_name", sa.String(35), nullable=False),
        sa.Column("active", sa.Boolean, default=True),
    )


def downgrade():
    op.drop_table("users")
