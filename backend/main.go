package main

import (
	"go_import/app"
	"go_import/controller"
	"go_import/helper"
	"go_import/repository"
	"go_import/service"
	"net/http"

	_ "github.com/go-sql-driver/mysql"

	"github.com/julienschmidt/httprouter"
)

func main() {
	db := app.NewDB()
	userRepository := repository.NewUserRepository()
	userService := service.NewUserService(userRepository, db)
	userController := controller.NewUserController(userService)
	router := httprouter.New()

	router.POST("/api/users", userController.Create)

	server := http.Server{
		Addr:    "localhost:3000",
		Handler: router,
	}

	err := server.ListenAndServe()
	helper.PanicIfError(err)
}