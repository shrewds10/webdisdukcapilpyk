package controller

import (
	"backend/helper"
	"backend/model/web"
	"backend/service"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type LayananControllerImpl struct {
	service service.LayananService
}

func NewLayananController() LayananController {
	return &LayananControllerImpl{}
}

func (controller LayananControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params *httprouter.Params) {
	layananCreateRequest := web.LayananCreateRequest{}
	helper.JsonDecode(request, &layananCreateRequest)

	layanan := controller.service.Create(request.Context(), layananCreateRequest)

	layananResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   layanan,
	}

	helper.JsonEncode(writer, layananResponse)
}
