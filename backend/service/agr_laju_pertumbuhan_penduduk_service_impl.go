package service

import (
	"backend/exception"
	"backend/helper"
	"backend/model/entity"
	"backend/model/web"
	"backend/repository"
	"context"
	"database/sql"
)

type AgrLajuPertumbuhanPendudukServiceImpl struct {
	repository repository.AgrLajuPertumbuhanPendudukRepository
	db         *sql.DB
}

func NewAgrLajuPertumbuhanPendudukServiceService(agrLajuPertumbuhanPendudukRepository repository.AgrLajuPertumbuhanPendudukRepository, db *sql.DB) AgrLajuPertumbuhanPendudukService {
	return &AgrLajuPertumbuhanPendudukServiceImpl{
		repository: agrLajuPertumbuhanPendudukRepository,
		db:         db,
	}
}

func (service AgrLajuPertumbuhanPendudukServiceImpl) Create(ctx context.Context, agrLajuPertumbuhanPenduduk []web.AgrLajuPertumbuhanPendudukCreateRequest) {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	var agrLajuPertumbuhanPendudukAll []entity.AgrLajuPertumbuhanPenduduk
	for i := 0; i < len(agrLajuPertumbuhanPenduduk); i++ {
		agrLajuPertumbuhanPenduduk := entity.AgrLajuPertumbuhanPenduduk{
			Kode:     agrLajuPertumbuhanPenduduk[i].Kode,
			Semester: agrLajuPertumbuhanPenduduk[i].Semester,
			Tahun:    agrLajuPertumbuhanPenduduk[i].Tahun,
			Pria:     agrLajuPertumbuhanPenduduk[i].Pria,
			Wanita:   agrLajuPertumbuhanPenduduk[i].Wanita,
		}
		agrLajuPertumbuhanPendudukAll = append(agrLajuPertumbuhanPendudukAll, agrLajuPertumbuhanPenduduk)
	}
	service.repository.Create(ctx, tx, agrLajuPertumbuhanPendudukAll)
}

func (service AgrLajuPertumbuhanPendudukServiceImpl) Update(ctx context.Context, agrLajuPertumbuhanPenduduk web.AgrLajuPertumbuhanPendudukUpdateRequest) web.AgrLajuPertumbuhanPendudukResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	agrLajuPertumbuhanPendudukUpdate, err := service.repository.FindById(ctx, tx, agrLajuPertumbuhanPenduduk.Kode, agrLajuPertumbuhanPenduduk.Semester, agrLajuPertumbuhanPenduduk.Tahun)

	agrLajuPertumbuhanPendudukUpdate.Pria = agrLajuPertumbuhanPenduduk.Pria
	agrLajuPertumbuhanPendudukUpdate.Wanita = agrLajuPertumbuhanPenduduk.Wanita

	service.repository.Update(ctx, tx, agrLajuPertumbuhanPendudukUpdate)

	agrLajuPertumbuhanPendudukResponse := web.AgrLajuPertumbuhanPendudukResponse{
		Kode:     agrLajuPertumbuhanPendudukUpdate.Kode,
		Semester: agrLajuPertumbuhanPendudukUpdate.Semester,
		Tahun:    agrLajuPertumbuhanPendudukUpdate.Tahun,
		Pria:     agrLajuPertumbuhanPendudukUpdate.Pria,
		Wanita:   agrLajuPertumbuhanPendudukUpdate.Wanita,
	}

	return agrLajuPertumbuhanPendudukResponse
}

func (service AgrLajuPertumbuhanPendudukServiceImpl) Delete(ctx context.Context, kode string, semester, tahun int) {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	service.repository.Delete(ctx, tx, kode, semester, tahun)
}

func (service AgrLajuPertumbuhanPendudukServiceImpl) FindById(ctx context.Context, kode string, semester int, tahun int) web.AgrLajuPertumbuhanPendudukResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	agrLajuPertumbuhanPenduduk, err := service.repository.FindById(ctx, tx, kode, semester, tahun)
	if err != nil {
		panic(exception.NewNotFoundHandler(err.Error()))
	}

	agrLajuPertumbuhanPendudukResponse := web.AgrLajuPertumbuhanPendudukResponse{
		Kode:     agrLajuPertumbuhanPenduduk.Kode,
		Semester: agrLajuPertumbuhanPenduduk.Semester,
		Tahun:    agrLajuPertumbuhanPenduduk.Tahun,
		Pria:     agrLajuPertumbuhanPenduduk.Pria,
		Wanita:   agrLajuPertumbuhanPenduduk.Wanita,
	}
	return agrLajuPertumbuhanPendudukResponse
}

func (service AgrLajuPertumbuhanPendudukServiceImpl) FindAll(ctx context.Context) []web.AgrLajuPertumbuhanPendudukResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	agrLajuPertumbuhanPendudukServiceAll := service.repository.FindAll(ctx, tx)

	return helper.ToAgrLajuPertumbuhanPendudukResponses(agrLajuPertumbuhanPendudukServiceAll)
}
