package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type UserRepository interface {
	Create(ctx context.Context, tx *sql.Tx, user entity.User) entity.User
	Update(ctx context.Context, tx *sql.Tx, user entity.User) entity.User
	Delete(ctx context.Context, tx *sql.Tx, userId int)
	FindById(ctx context.Context, tx *sql.Tx, userId int) (entity.User, error)
	FindAll(ctx context.Context, tx *sql.Tx) []entity.User
}
