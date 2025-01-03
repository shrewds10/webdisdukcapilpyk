package controller

import (
	"backend/helper"
	"backend/model/web"
	"backend/service"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/xuri/excelize/v2"
)

type UserControllerImpl struct {
	service service.UserService
}

func NewUserController(userService service.UserService) UserController {
	return &UserControllerImpl{
		service: userService,
	}
}

func (controller UserControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	file, _, err := request.FormFile("file")
	helper.PanicIfError(err)

	xlsx, err := excelize.OpenReader(file)
	helper.PanicIfError(err)
	defer file.Close()

	rows, _ := xlsx.GetRows("Sheet1")
	var users []web.UserCreateRequest
	for i, row := range rows {
		user := web.UserCreateRequest{}
		if i == 0 {
			continue
		}
		user.Name = row[0]
		user.Email = row[1]
		users = append(users, user)
	}

	user := controller.service.Create(request.Context(), users)
	userResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   user,
	}

	helper.JsonEncode(writer, userResponse)
}
