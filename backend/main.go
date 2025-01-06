package main

import (
	"backend/helper"
	"backend/injector"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	server := injector.InitializedController()
	err := server.ListenAndServe()
	helper.PanicIfError(err)
}
