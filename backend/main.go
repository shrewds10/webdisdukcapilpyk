package main

import (
	"backend/app"
	"backend/controller"
	"backend/helper"
	"backend/injector"
	"backend/repository"
	"backend/service"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db := app.NewDB()
	userRepository := repository.NewUserRepository()
	userService := service.NewUserService(userRepository, db)
	userController := controller.NewUserController(userService)

	// agrLajuPertumbuhanPendudukRepository := repository.NewAgrLajuPertumbuhanPendudukRepository()
	// agrLajuPertumbuhanPendudukService := service.NewAgrLajuPertumbuhanPendudukServiceService(agrLajuPertumbuhanPendudukRepository, db)
	// agrLajuPertumbuhanPendudukController := controller.NewAgrLajuPertumbuhanPendudukControll(agrLajuPertumbuhanPendudukService)

	liveReportRepository := repository.NewLiveReportRepository()
	liveReportService := service.NewLiveReportService(db, liveReportRepository)
	liveReportController := controller.NewLiveReportController(liveReportService)

	agrLajuPertumbuhanPendudukController := injector.InitializedAgrLajuPertumbuhanPenduduk()
	controllers := app.RouterController{
		User:                       userController,
		AgrLajuPertumbuhanPenduduk: agrLajuPertumbuhanPendudukController,
		LiveReport:                 liveReportController,
	}
	router := app.NewRouter(controllers)

	server := http.Server{
		Addr:    "localhost:3000",
		Handler: router,
	}

	err := server.ListenAndServe()
	helper.PanicIfError(err)
}
