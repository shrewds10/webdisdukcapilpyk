package service

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
	"go_import/model/web"
	"go_import/repository"
)

type UserServiceImpl struct {
	repository repository.UserRepository
	db         *sql.DB
}

func NewUserService(userRepository repository.UserRepository, db *sql.DB) UserService {
	return &UserServiceImpl{
		repository: userRepository,
		db:         db,
	}
}

func (service UserServiceImpl) Create(ctx context.Context, request []web.UserCreateRequest) web.UserResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	var users []entity.User
	for i := 0; i < len(request); i++ {
		user := entity.User{
			Name:  request[i].Name,
			Email: request[i].Email,
		}
		users = append(users, user)
	}

	user := service.repository.Create(ctx, tx, users)
	return helper.ToUserResponse(user)
}
