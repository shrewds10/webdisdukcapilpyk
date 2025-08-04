package app

import (
	"backend/controller"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type RouterController struct {
	AgrLajuPertumbuhanPenduduk controller.AgrLajuPertumbuhanPendudukController
	LiveReport                 controller.LiveReportController
	User                       controller.UserController
	News                       controller.NewsController
	Layanan                    controller.LayananController
}

func NewFooBarController(
	agr controller.AgrLajuPertumbuhanPendudukController,
	user controller.UserController,
	live controller.LiveReportController,
	news controller.NewsController,
	// ,
	// layanan controller.LayananController
) *RouterController {
	return &RouterController{
		AgrLajuPertumbuhanPenduduk: agr,
		User:                       user,
		LiveReport:                 live,
		News:                       news,
		// Layanan:                    layanan,
	}
}

func NewRouter(controller *RouterController) *httprouter.Router {
	router := httprouter.New()

	router.POST("/api/users", controller.User.Create)
	router.PUT("/api/users", controller.User.Update)
	router.DELETE("/api/users/:userId", controller.User.Delete)
	router.GET("/api/users/:userId", controller.User.FindById)
	router.GET("/api/users", controller.User.FindAll)

	router.POST("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.Create)
	router.PUT("/api/agrlajupertumbuhanpendudukupdate", controller.AgrLajuPertumbuhanPenduduk.Update)
	router.DELETE("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.Delete)
	router.GET("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.FindById)
	router.GET("/api/agrlajupertumbuhanpendudukall", controller.AgrLajuPertumbuhanPenduduk.FindAll)

	router.POST("/api/livereport", controller.LiveReport.Create)
	router.GET("/api/livereport", controller.LiveReport.FindAll)

	router.POST("/api/news", controller.News.Create)
	router.PUT("/api/news/:newsId", controller.News.Update)
	router.DELETE("/api/news/:newsId", controller.News.Delete)
	router.GET("/api/news/:newsId", controller.News.FindById)
	router.GET("/api/news/", controller.News.FindAll)

	router.ServeFiles("/images/*filepath", http.Dir("images"))

	// router.PanicHandler = exception.ErrorHandler

	return router
}
