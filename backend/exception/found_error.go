package exception

import (
	"backend/helper"
	"backend/model/web"
	"encoding/json"
	"net/http"
)

func ErrorHandler(writer http.ResponseWriter, request *http.Request, err interface{}) {
	NotFoundError(writer, request, err)
	InternalServerError(writer, request, err)
}

func NotFoundError(writer http.ResponseWriter, request *http.Request, err interface{}) bool {
	exception, ok := err.(NotFoundHandler)
	if ok {
		writer.Header().Add("Content-type", "application/json")
		writer.WriteHeader(http.StatusBadRequest)

		webResponse := web.WebResponse{
			Code:   http.StatusBadRequest,
			Status: "BAD REQUEST",
			Data:   exception.Error,
		}
		encoder := json.NewEncoder(writer)
		encoder.Encode(webResponse)
		return true
	} else {
		return false
	}
}

func InternalServerError(writer http.ResponseWriter, request *http.Request, err interface{}) {
	writer.Header().Add("Content-type", "application/json")
	writer.WriteHeader(http.StatusInternalServerError)

	webResponse := web.WebResponse{
		Code:   http.StatusInternalServerError,
		Status: "INTERNAL SERVER ERROR",
		Data:   err,
	}

	helper.JsonEncode(writer, webResponse)
}
