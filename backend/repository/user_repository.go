package repository

import (
	"context"
	"database/sql"
	"go_import/model/entity"
)

type UserRepository interface {
	Create(ctx context.Context, tx *sql.Tx, user []entity.User) entity.User
}
