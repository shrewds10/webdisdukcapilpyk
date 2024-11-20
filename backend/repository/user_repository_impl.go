package repository

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
)

type UserRepositoryImpl struct {
}

func NewUserRepository() *UserRepositoryImpl {
	return &UserRepositoryImpl{}
}

func (repository UserRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, user []entity.User) entity.User {
	sqlQuery := "INSERT INTO user(name, email) VALUES(?,?)"
	for i := 0; i < len(user); i++ {
		_, err := tx.ExecContext(ctx, sqlQuery, user[i].Name, user[i].Email)
		helper.PanicIfError(err)
	}

	return user[0]
}
