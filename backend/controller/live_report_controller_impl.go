package controller

import (
	"go_import/helper"
	"go_import/model/web"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type LiveReportControllerImpl struct {
}

func (controller LiveReportControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	liveReportResponse := web.LiveReportResponse{}
	helper.JsonDecode(request, liveReportResponse)

}
