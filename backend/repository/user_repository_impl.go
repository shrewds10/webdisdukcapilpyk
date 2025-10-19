package repository

import (
	"backend/helper"
	"backend/model/entity"
	"context"
	"database/sql"
	"errors"
)

type UserRepositoryImpl struct {
}

func NewUserRepository() UserRepository {
	return &UserRepositoryImpl{}
}

func (repository UserRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, user entity.User) entity.User {
	sqlQuery := "INSERT INTO users(nama, username, email, password, role, created_at, updated_at) VALUES(?,?,?,?,?,?,?)"

	_, err := tx.ExecContext(ctx, sqlQuery, user.Nama, user.Username, user.Email, user.Password, user.Role, user.Create_at, user.Update_at)
	helper.PanicIfError(err)

	return user
}

func (repository UserRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, user entity.User) entity.User {
	sqlQuery := "UPDATE users(nama, username, email, password, role, create_at, update_at) VALUES(?,?,?,?,?,?,?,?)"

	_, err := tx.ExecContext(ctx, sqlQuery, user.Nama, user.Email, user.Password, user.Role, user.Create_at, user.Update_at)
	helper.PanicIfError(err)

	return user
}

func (repository UserRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, userId int) {
	sqlQuery := "DELETE FROM users WHERE user_id = ?"

	_, err := tx.ExecContext(ctx, sqlQuery, userId)
	helper.PanicIfError(err)
}

func (repository UserRepositoryImpl) FindById(ctx context.Context, tx *sql.Tx, userId int) (entity.User, error) {
	sqlQuery := "SELECT * FROM users WHERE Id = ?"

	row, err := tx.QueryContext(ctx, sqlQuery, userId)
	helper.PanicIfError(err)
	defer row.Close()

	user := entity.User{}
	if row.Next() {
		err := row.Scan(
			&user.Id,
			&user.Nama,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Create_at,
			&user.Update_at,
		)
		helper.PanicIfError(err)
		return user, nil
	} else {
		return user, errors.New("data not found")
	}
}

func (repository UserRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []entity.User {
	sqlQuery := "SELECT * FROM user"
	rows, err := tx.QueryContext(ctx, sqlQuery)
	helper.PanicIfError(err)
	defer rows.Close()

	var userAll []entity.User
	for rows.Next() {
		user := entity.User{}
		err := rows.Scan(
			&user.Id,
			&user.Nama,
			&user.Username,
			&user.Email,
			&user.Password,
			&user.Role,
			&user.Create_at,
			&user.Update_at,
		)
		helper.PanicIfError(err)
		userAll = append(userAll, user)
	}

	return userAll
}
