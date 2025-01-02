package app

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type RouterController interface {
	Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params)
	Update(writer http.ResponseWriter, request *http.Request, params httprouter.Params)
	Delete(writer http.ResponseWriter, request *http.Request, params httprouter.Params)
	FindById(writer http.ResponseWriter, request *http.Request, params httprouter.Params)
	FindAll(writer http.ResponseWriter, request *http.Request, params httprouter.Params)
}

func NewRouter(controller RouterController) *httprouter.Router {
	router := httprouter.New()

	router.POST("/api/users", controller.Create)

	router.POST("/api/agrlajupertumbuhanpenduduk", controller.Create)
	router.GET("/api/agrlajupertumbuhanpenduduk", controller.FindById)
	router.GET("/api/agrlajupertumbuhanpendudukall", controller.FindAll)
	router.PUT("/api/agrlajupertumbuhanpendudukupdate", controller.Update)
	router.DELETE("/api/agrlajupertumbuhanpenduduk", controller.Delete)

	return router
}
