package service

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
	"go_import/model/web"
	"go_import/repository"
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

// func (service AgrLajuPertumbuhanPendudukServiceImpl) Update(ctx context.Context, agrLajuPertumbuhanPendudukId []web.AgrLajuPertumbuhanPendudukCreateRequest) web.AgrLajuPertumbuhanPendudukResponse {
// 	tx, err := service.db.Begin()
// 	helper.PanicIfError(err)
// 	defer helper.RollbackOrCommit(tx)

// 	service.repository.Update(ctx, tx)
// }

func (service AgrLajuPertumbuhanPendudukServiceImpl) FindById(ctx context.Context, agrLajuPertumbuhanPendudukId int) web.AgrLajuPertumbuhanPendudukResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	agrLajuPertumbuhanPenduduk := service.repository.FindById(ctx, tx, agrLajuPertumbuhanPendudukId)
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
