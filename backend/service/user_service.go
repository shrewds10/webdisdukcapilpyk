package service

import (
	"backend/model/web"
	"context"
)

type UserService interface {
	Create(ctx context.Context, request []web.UserCreateRequest) web.UserResponse
}
