package controller

import (
	"go_import/helper"
	"go_import/model/web"
	"go_import/service"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type LiveReportControllerImpl struct {
	service service.LiveReportService
}

func NewLiveReportController(service service.LiveReportService) LiveReportController {
	return &LiveReportControllerImpl{
		service: service,
	}
}

func (controller LiveReportControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	liveReportCreateRequest := web.LiveReportCreateReqest{}
	helper.JsonDecode(request, &liveReportCreateRequest)

	controller.service.Create(request.Context(), liveReportCreateRequest)

	liveReportResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   liveReportCreateRequest,
	}

	helper.JsonEncode(writer, liveReportResponse)
}
