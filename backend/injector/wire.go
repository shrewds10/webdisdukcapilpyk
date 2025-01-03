//go:build wireinject
// +build wireinject

package injector

import (
	"backend/app"
	"backend/controller"
	"backend/repository"
	"backend/service"

	"github.com/google/wire"
)

func InitializedAgrLajuPertumbuhanPenduduk() controller.AgrLajuPertumbuhanPendudukController {
	wire.Build(
		app.NewDB,
		repository.NewAgrLajuPertumbuhanPendudukRepository,
		service.NewAgrLajuPertumbuhanPendudukServiceService,
		controller.NewAgrLajuPertumbuhanPendudukController,
	)
	return nil
}
