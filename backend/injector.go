//go:build wireinject
// +build wireinject

package main

import (
	"go_import/app"
	"go_import/controller"
	"go_import/repository"
	"go_import/service"

	"github.com/google/wire"
)

func InitializedAgrLajuPertumbuhanPenduduk() controller.AgrLajuPertumbuhanPendudukController {
	wire.Build(
		app.NewDB,
		repository.NewAgrLajuPertumbuhanPendudukRepository,
		service.NewAgrLajuPertumbuhanPendudukServiceService,
		controller.NewAgrLajuPertumbuhanPendudukControll,
	)
	return nil
}
