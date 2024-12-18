package service

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
	"go_import/model/web"
	"go_import/repository"
)

type LiveReportServiceImpl struct {
	db         *sql.DB
	repository repository.LiveReportRepository
}

func NewLiveReportService(db *sql.DB, repository repository.LiveReportRepository) LiveReportService {
	return &LiveReportServiceImpl{
		db:         db,
		repository: repository,
	}
}

func (service LiveReportServiceImpl) Create(ctx context.Context, request web.LiveReportCreateReqest) web.LiveReportResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	liveReport := entity.LiveReport{
		Perekaman:                 request.Perekaman,
		Cetak_Baru:                request.Cetak_Baru,
		Perubahan_Elemen:          request.Perubahan_Elemen,
		Pergantian_Rusak:          request.Pergantian_Rusak,
		Pergantian_Hilang:         request.Pergantian_Hilang,
		Perihal_Lainnya:           request.Perihal_Lainnya,
		Sisa_Blanko:               request.Sisa_Blanko,
		Akta_Kelahiran_Dibawah_18: request.Akta_Kelahiran_Dibawah_18,
		Akta_Kelahiran_Diatas_18:  request.Akta_Kelahiran_Diatas_18,
		Akta_Kematian:             request.Akta_Kematian,
		Cetak_Kia:                 request.Cetak_Kia,
		Kartu_Keluarga:            request.Kartu_Keluarga,
		Pindah:                    request.Pindah,
		Datang:                    request.Datang,
		Aktivasi_Ikd:              request.Aktivasi_Ikd,
		Total_Aktivasi_Ikd:        request.Total_Aktivasi_Ikd,
		Tanggal:                   request.Tanggal,
	}

	liveReportResponse := service.repository.Create(ctx, tx, liveReport)
	return web.LiveReportResponse(liveReportResponse)

}
