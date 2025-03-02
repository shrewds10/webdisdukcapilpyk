package service

import (
	"backend/helper"
	"backend/model/entity"
	"backend/model/web"
	"backend/repository"
	"context"
	"database/sql"
)

type LayananServiceImpl struct {
	db         *sql.DB
	repository repository.LayananRepository
}

func NewLayananServiceImpl() LayananService {
	return &LayananServiceImpl{}
}

func (service LayananServiceImpl) Create(ctx context.Context, request web.LayananCreateRequest) web.LayananResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	layanan := entity.Layanan{
		Id_jenis_layanan: request.Id_jenis_layanan,
		Nama_layanan:     request.Nama_layanan,
		Persyaratan:      request.Persyaratan,
		Penjelasan:       request.Penjelasan,
	}

	layananResponse := service.repository.Create(ctx, tx, layanan)
	return helper.ToLayananResponse(layananResponse)
}
