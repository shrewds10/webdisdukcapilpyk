package controller

import (
	"backend/helper"
	"backend/model/web"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

type BeritaControllerImpl struct {
}

func NewBeritaController() BeritaController {
	return &BeritaControllerImpl{}
}

func (controller BeritaControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	
	authorId := request.FormValue("Author_id")
	author_id, err := strconv.Atoi(authorId)
	helper.PanicIfError(err)
	
	categoryId := request.FormValue("Category_id")
	category_id, err := strconv.Atoi(categoryId)
	helper.PanicIfError(err)

	uploadFile, handler, err := request.FormFile("file")
	filename := handler.Filename
	helper.PanicIfError(err)
	defer uploadFile.Close()

	dir, err := os.Getwd()
	helper.PanicIfError(err)

	filelocation := filepath.Join(dir, "images", filename)
	targetFile, err := os.OpenFile(filelocation, os.O_WRONLY|os.O_CREATE, 0644)
	helper.PanicIfError(err)
	defer targetFile.Close()

	_, err = io.Copy(targetFile, uploadFile)
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
