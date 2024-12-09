package controller

import (
	"go_import/helper"
	"go_import/model/web"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type LiveReportControllerImpl struct {
}

func NewLiveReportController() LiveReportController {
	return &LiveReportControllerImpl{}
}

func (controller LiveReportControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	liveReportCreateRequest := web.LiveReportCreateReqest{}
	helper.JsonDecode(request, &liveReportCreateRequest)

	liveReportResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   liveReportCreateRequest,
	}

	helper.JsonEncode(writer, liveReportResponse)
}
