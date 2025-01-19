package controller

import (
	"backend/helper"
	"backend/model/web"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

type BeritaControllerImpl struct {
}

func NewBeritaController() BeritaController {
	return &BeritaControllerImpl{}
}

func (controller BeritaControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	_, handler, err := request.FormFile("file")
	filename := handler.Filename
	helper.PanicIfError(err)
	// defer image.Close()

	authorId := request.FormValue("Author_id")
	author_id, err := strconv.Atoi(authorId)
	helper.PanicIfError(err)

	categoryId := request.FormValue("Category_id")
	category_id, err := strconv.Atoi(categoryId)
	helper.PanicIfError(err)

	beritaCreateRequest := web.BeritaCreateRequest{}
	beritaCreateRequest.Title = request.FormValue("Title")
	beritaCreateRequest.Slug = request.FormValue("Slug")
	beritaCreateRequest.Content = request.FormValue("Content")
	beritaCreateRequest.Thumbnail_url = filename
	beritaCreateRequest.Author_id = author_id
	beritaCreateRequest.Category_id = category_id
	beritaCreateRequest.Status = request.FormValue("Status")
	beritaCreateRequest.Create_at = request.FormValue("Create_at")
	beritaCreateRequest.Update_at = request.FormValue("Update_at")

	beritaResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   beritaCreateRequest,
	}

	helper.JsonEncode(writer, beritaResponse)
}
