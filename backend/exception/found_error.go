package exception

import (
	"backend/helper"
	"backend/model/web"
	"encoding/json"
	"net/http"
)

type ErrorNotFound struct {
	Tesaja string
}

func NewErrorNotFound(err string) ErrorNotFound {
	return ErrorNotFound{Tesaja: err}
}

// func NewErrorHandler(writer http.ResponseWriter, request *http.Request, err interface{}) {
// 	// notFoundError(writer, request, err)
// 	InternalServerError(writer, request, err)
// }

func NotFoundError(writer http.ResponseWriter, err interface{}) {
	// writer.Header().Add("Content-type", "application/json")
	// writer.WriteHeader(http.StatusBadRequest)

	webResponse := web.WebResponse{
		Code:   http.StatusBadRequest,
		Status: "BAD REQUEST",
		Data:   err,
	}
	encoder := json.NewEncoder(writer)
	encoder.Encode(webResponse)
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
