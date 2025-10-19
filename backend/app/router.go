package app

import (
	"backend/controller"
<<<<<<< HEAD
=======
	"net/http"
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69

	"github.com/julienschmidt/httprouter"
)

type RouterController struct {
	AgrLajuPertumbuhanPenduduk controller.AgrLajuPertumbuhanPendudukController
	LiveReport                 controller.LiveReportController
	User                       controller.UserController
<<<<<<< HEAD
	Berita                     controller.BeritaController
=======
	News                       controller.NewsController
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69
	Layanan                    controller.LayananController
}

func NewFooBarController(
	agr controller.AgrLajuPertumbuhanPendudukController,
	user controller.UserController,
	live controller.LiveReportController,
<<<<<<< HEAD
	berita controller.BeritaController,
=======
	news controller.NewsController,
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69
	// ,
	// layanan controller.LayananController
) *RouterController {
	return &RouterController{
		AgrLajuPertumbuhanPenduduk: agr,
		User:                       user,
		LiveReport:                 live,
<<<<<<< HEAD
		Berita:                     berita,
=======
		News:                       news,
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69
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

<<<<<<< HEAD
	router.POST("/api/berita", controller.Berita.Create)
=======
	router.POST("/api/news", controller.News.Create)
	router.PUT("/api/news/:newsId", controller.News.Update)
	router.DELETE("/api/news/:newsId", controller.News.Delete)
	router.GET("/api/news/:newsId", controller.News.FindById)
	router.GET("/api/news/", controller.News.FindAll)

	router.ServeFiles("/images/*filepath", http.Dir("images"))
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69

	// router.PanicHandler = exception.ErrorHandler

	return router
}
