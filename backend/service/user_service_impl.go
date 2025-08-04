package service

import (
	"backend/exception"
	"backend/helper"
	"backend/model/entity"
	"backend/model/web"
	"backend/repository"
	"context"
	"database/sql"
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

func (service UserServiceImpl) Create(ctx context.Context, request web.UserCreateRequest) web.UserResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	user := entity.User{
		Nama:      request.Nama,
		Username:  request.Username,
		Email:     request.Email,
		Password:  request.Password,
		Role:      request.Role,
		Create_at: request.Create_at,
		Update_at: request.Update_at,
	}

	userResponse := service.repository.Create(ctx, tx, user)

	return helper.ToUserResponse(userResponse)
}

func (service UserServiceImpl) Update(ctx context.Context, request web.UserUpdateRequest) web.UserResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	userUpdate, err := service.repository.FindById(ctx, tx, request.Id)
	helper.PanicIfError(err)

	userUpdate.Nama = request.Nama
	userUpdate.Username = request.Username
	userUpdate.Email = request.Email
	userUpdate.Password = request.Password
	userUpdate.Role = request.Role
	userUpdate.Create_at = request.Create_at
	userUpdate.Update_at = request.Update_at

	service.repository.Update(ctx, tx, userUpdate)

	news := web.UserResponse{
		Id:        userUpdate.Id,
		Nama:      userUpdate.Nama,
		Username:  userUpdate.Username,
		Email:     userUpdate.Email,
		Password:  userUpdate.Password,
		Role:      userUpdate.Role,
		Create_at: userUpdate.Create_at,
		Update_at: userUpdate.Update_at,
	}

	return news
}

func (service UserServiceImpl) Delete(ctx context.Context, userId int) {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	user, err := service.repository.FindById(ctx, tx, userId)
	if err != nil {
		panic(exception.NewNotFoundError(err.Error()))
	}

	service.repository.Delete(ctx, tx, user.Id)
}

func (service UserServiceImpl) FindById(ctx context.Context, userId int) web.UserResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	user, err := service.repository.FindById(ctx, tx, userId)
	if err != nil {
		panic(exception.NewNotFoundError(err.Error()))
	}

	return helper.ToUserResponse(user)
}

func (service UserServiceImpl) FindAll(ctx context.Context) []web.UserResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	user := service.repository.FindAll(ctx, tx)

	return helper.ToUserResponses(user)
}
