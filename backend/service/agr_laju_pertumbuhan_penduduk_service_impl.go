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

func (service AgrLajuPertumbuhanPendudukServiceImpl) Create(ctx context.Context, request []web.AgrLajuPertumbuhanPendudukCreateRequest) {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	var agrLajuPertumbuhanPendudukAll []entity.AgrLajuPertumbuhanPenduduk
	for i := 0; i < len(request); i++ {
		agrLajuPertumbuhanPenduduk := entity.AgrLajuPertumbuhanPenduduk{
			Kode:     request[i].Kode,
			Semester: request[i].Semester,
			Tahun:    request[i].Tahun,
			Pria:     request[i].Pria,
			Wanita:   request[i].Wanita,
		}
		agrLajuPertumbuhanPendudukAll = append(agrLajuPertumbuhanPendudukAll, agrLajuPertumbuhanPenduduk)
	}

	service.repository.Create(ctx, tx, agrLajuPertumbuhanPendudukAll)
}
func (service AgrLajuPertumbuhanPendudukServiceImpl) FindAll(ctx context.Context) []web.AgrLajuPertumbuhanPendudukResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	agrLajuPertumbuhanPendudukServiceAll := service.repository.FindAll(ctx, tx)

	return helper.ToAgrLajuPertumbuhanPendudukResponses(agrLajuPertumbuhanPendudukServiceAll)
}
