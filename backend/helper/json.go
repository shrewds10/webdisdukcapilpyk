package helper

import (
	"encoding/json"
	"net/http"
)

func JsonEncode(writer http.ResponseWriter, result interface{}) {
	writer.Header().Add("Content-type", "application/json")
	encoder := json.NewEncoder(writer)
	err := encoder.Encode(result)
	PanicIfError(err)
}
