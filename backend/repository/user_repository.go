package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type UserRepository interface {
	Create(ctx context.Context, tx *sql.Tx, user []entity.User) entity.User
}
