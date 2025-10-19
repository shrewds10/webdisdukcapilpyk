package controller

import (
	"backend/helper"
	"backend/model/web"
	"backend/service"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

type NewsControllerImpl struct {
	service service.NewsService
}

func NewNewsController(service service.NewsService) NewsController {
	return &NewsControllerImpl{
		service: service,
	}
}

func (controller NewsControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
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

	newsCreateRequest := web.NewsCreateRequest{}
	newsCreateRequest.Title = request.FormValue("Title")
	newsCreateRequest.Slug = request.FormValue("Slug")
	newsCreateRequest.Content = request.FormValue("Content")
	newsCreateRequest.Thumbnail_url = filename
	newsCreateRequest.Author_id = author_id
	newsCreateRequest.Category_id = category_id
	newsCreateRequest.Status = request.FormValue("Status")
	newsCreateRequest.Create_at = request.FormValue("Create_at")
	newsCreateRequest.Update_at = request.FormValue("Update_at")

	news := controller.service.Create(request.Context(), newsCreateRequest)

	newsResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   news,
	}

	helper.JsonEncode(writer, newsResponse)
}

func (controller NewsControllerImpl) Update(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	newsUpdateRequest := web.NewsUpdateRequest{}
	helper.JsonDecode(request, &newsUpdateRequest)

	newsId := params.ByName("newsId")
	id, err := strconv.Atoi(newsId)
	helper.PanicIfError(err)

	newsUpdateRequest.Id = id

	categoryResponse := controller.service.Update(request.Context(), newsUpdateRequest)
	webResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   categoryResponse,
	}

	helper.JsonEncode(writer, webResponse)
}

func (controller NewsControllerImpl) Delete(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	newsId := params.ByName("newsId")
	id, err := strconv.Atoi(newsId)
	helper.PanicIfError(err)

	controller.service.Delete(request.Context(), id)

	newsResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   "",
	}

	helper.JsonEncode(writer, newsResponse)
}

func (controller NewsControllerImpl) FindById(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	newsId := params.ByName("newsId")
	Id, err := strconv.Atoi(newsId)
	helper.PanicIfError(err)

	news := controller.service.FindById(request.Context(), Id)

	newsResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   news,
	}

	helper.JsonEncode(writer, newsResponse)
}

func (controller NewsControllerImpl) FindAll(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	newsResponses := controller.service.FindAll(request.Context())
	webResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   newsResponses,
	}

	helper.JsonEncode(writer, webResponse)
}
