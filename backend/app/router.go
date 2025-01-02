package app

import (
	"go_import/controller"

	"github.com/julienschmidt/httprouter"
)

type RouterController struct {
	AgrLajuPertumbuhanPenduduk controller.AgrLajuPertumbuhanPendudukController
	LiveReport                 controller.LiveReportController
	User                       controller.UserController
}

func NewRouter(controller RouterController) *httprouter.Router {
	router := httprouter.New()

	router.POST("/api/users", controller.User.Create)

	router.POST("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.Create)
	router.GET("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.FindById)
	router.GET("/api/agrlajupertumbuhanpendudukall", controller.AgrLajuPertumbuhanPenduduk.FindAll)
	router.PUT("/api/agrlajupertumbuhanpendudukupdate", controller.AgrLajuPertumbuhanPenduduk.Update)
	router.DELETE("/api/agrlajupertumbuhanpenduduk", controller.AgrLajuPertumbuhanPenduduk.Delete)

	router.POST("/api/livereport", controller.LiveReport.Create)
	router.GET("/api/livereport", controller.LiveReport.FindAll)

	return router
}
