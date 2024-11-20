package service

import (
	"context"
	"go_import/model/web"
)

type UserService interface {
	Create(ctx context.Context, request []web.UserCreateRequest) web.UserResponse
}
