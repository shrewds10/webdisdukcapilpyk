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

var newsSet = wire.NewSet(
	repository.NewNewsRepository,
	service.NewNewsService,
	controller.NewNewsController,
)

func InitializedController() *http.Server {
	wire.Build(
		app.NewDB,
		agrlajupertumbuhanpendudukSet,
		userSet,
		liveReportSet,
		newsSet,
		app.NewFooBarController,
		app.NewRouter,
		NewServer,
	)

	return nil
}
