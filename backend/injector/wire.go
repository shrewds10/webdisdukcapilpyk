//go:build wireinject
// +build wireinject

package injector

import (
	"backend/app"
	"backend/controller"
	"backend/repository"
	"backend/service"
	"net/http"

	"github.com/google/wire"
)

var agrlajupertumbuhanpendudukSet = wire.NewSet(
	repository.NewAgrLajuPertumbuhanPendudukRepository,
	service.NewAgrLajuPertumbuhanPendudukServiceService,
	controller.NewAgrLajuPertumbuhanPendudukController,
)

var userSet = wire.NewSet(
	repository.NewUserRepository,
	service.NewUserService,
	controller.NewUserController,
)

var liveReportSet = wire.NewSet(
	repository.NewLiveReportRepository,
	service.NewLiveReportService,
	controller.NewLiveReportController,
)

<<<<<<< HEAD
// var beritaSet = wire.NewSet(
// 	controller.NewBeritaController,
// )
=======
var newsSet = wire.NewSet(
	repository.NewNewsRepository,
	service.NewNewsService,
	controller.NewNewsController,
)
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69

func InitializedController() *http.Server {
	wire.Build(
		app.NewDB,
		agrlajupertumbuhanpendudukSet,
		userSet,
		liveReportSet,
<<<<<<< HEAD
		controller.NewBeritaController,
=======
		newsSet,
>>>>>>> 4cf54d18ea3962da852d30ffce9b30c94ee43d69
		app.NewFooBarController,
		app.NewRouter,
		NewServer,
	)

	return nil
}
