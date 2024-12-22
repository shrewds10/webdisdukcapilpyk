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

	liveReport := controller.service.Create(request.Context(), liveReportCreateRequest)

	liveReportResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   liveReport,
	}

	helper.JsonEncode(writer, liveReportResponse)
}

func (controller LiveReportControllerImpl) FindAll(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	liveReportResponse := controller.service.FindAll(request.Context())

	liveReportResponses := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   liveReportResponse,
	}

	helper.JsonEncode(writer, liveReportResponses)
}
