package app

import (
	"backend/controller"

	"github.com/julienschmidt/httprouter"
)

type RouterController struct {
	AgrLajuPertumbuhanPenduduk controller.AgrLajuPertumbuhanPendudukController
	LiveReport                 controller.LiveReportController
	User                       controller.UserController
	Berita                     controller.BeritaController
}

func NewFooBarController(
	agr controller.AgrLajuPertumbuhanPendudukController,
	user controller.UserController,
	live controller.LiveReportController,
	berita controller.BeritaController) *RouterController {
	return &RouterController{
		AgrLajuPertumbuhanPenduduk: agr,
		User:                       user,
		LiveReport:                 live,
		Berita:                     berita}
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

	router.POST("/api/berita", controller.Berita.Create)

	// router.PanicHandler = exception.ErrorHandler

	return router
}
