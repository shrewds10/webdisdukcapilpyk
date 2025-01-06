package app

import (
	"backend/controller"
	"backend/exception"

	"github.com/julienschmidt/httprouter"
)

type RouterController struct {
	AgrLajuPertumbuhanPenduduk controller.AgrLajuPertumbuhanPendudukController
	LiveReport                 controller.LiveReportController
	User                       controller.UserController
}

func NewFooBarController(
	agr controller.AgrLajuPertumbuhanPendudukController,
	user controller.UserController,
	live controller.LiveReportController) *RouterController {
	return &RouterController{
		AgrLajuPertumbuhanPenduduk: agr,
		User:                       user,
		LiveReport:                 live}
}

func NewRouter(controller *RouterController) *httprouter.Router {
	router := httprouter.New()

	router.POST("/api/users", controller.User.Create)

	router.POST("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.Create)
	router.GET("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.FindById)
	router.GET("/api/agrlajupertumbuhanpendudukall", controller.AgrLajuPertumbuhanPenduduk.FindAll)
	router.PUT("/api/agrlajupertumbuhanpendudukupdate", controller.AgrLajuPertumbuhanPenduduk.Update)
	router.DELETE("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.Delete)

	router.POST("/api/livereport", controller.LiveReport.Create)
	router.GET("/api/livereport", controller.LiveReport.FindAll)

	router.PanicHandler = exception.ErrorHandler

	return router
}
