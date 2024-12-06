package helper

import (
	"encoding/json"
	"net/http"
)

func JsonDecode(request *http.Request, result interface{}) {
	decoder := json.NewDecoder(request.Body)
	err := decoder.Decode(result)
	PanicIfError(err)
}

func JsonEncode(writer http.ResponseWriter, result interface{}) {
	writer.Header().Add("Content-type", "application/json")
	encoder := json.NewEncoder(writer)
	err := encoder.Encode(result)
	PanicIfError(err)
}
