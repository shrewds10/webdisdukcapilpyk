package helper

import (
	"go_import/model/entity"
	"go_import/model/web"
)

func ToUserResponse(user entity.User) web.UserResponse {
	return web.UserResponse{
		Id:    user.Id,
		Name:  user.Name,
		Email: user.Email,
	}
}
