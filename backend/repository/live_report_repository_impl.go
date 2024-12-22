package repository

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
)

type LiveReportRepositoryImpl struct {
}

func NewLiveReportRepository() LiveReportRepository {
	return &LiveReportRepositoryImpl{}
}

func (repository LiveReportRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, liveReport entity.LiveReport) entity.LiveReport {
	sqlQuery := `INSERT INTO live_report(
		PEREKAMAN,
		CETAK_BARU,
		PERUBAHAN_ELEMEN,
		PERGANTIAN_RUSAK,
		PERGANTIAN_HILANG,
		PERIHAL_LAINNYA,
		SISA_BLANKO,
		AKTA_KELAHIRAN_DIBAWAH_18,
		AKTA_KELAHIRAN_DIATAS_18,
		AKTA_KEMATIAN,
		CETAK_KIA,
		KARTU_KELUARGA,
		PINDAH,
		DATANG,
		AKTIVASI_IKD,
		TOTAL_AKTIVASI_IKD,
		TANGGAL)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

	_, err := tx.ExecContext(
		ctx, sqlQuery,
		liveReport.Perekaman,
		liveReport.Cetak_Baru,
		liveReport.Perubahan_Elemen,
		liveReport.Pergantian_Rusak,
		liveReport.Pergantian_Hilang,
		liveReport.Perihal_Lainnya,
		liveReport.Sisa_Blanko,
		liveReport.Akta_Kelahiran_Dibawah_18,
		liveReport.Akta_Kelahiran_Diatas_18,
		liveReport.Akta_Kematian,
		liveReport.Cetak_Kia,
		liveReport.Kartu_Keluarga,
		liveReport.Pindah,
		liveReport.Datang,
		liveReport.Aktivasi_Ikd,
		liveReport.Total_Aktivasi_Ikd,
		liveReport.Tanggal,
	)

	helper.PanicIfError(err)

	return liveReport
}

func (repository LiveReportRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []entity.LiveReport {
	sqlQuery := `SELECT * FROM live_report`
	rows, err := tx.QueryContext(ctx, sqlQuery)
	helper.PanicIfError(err)
	defer rows.Close()

	var liveReportAll []entity.LiveReport
	for rows.Next() {
		liveReport := entity.LiveReport{}
		err := rows.Scan(
			&liveReport.Id,
			&liveReport.Perekaman,
			&liveReport.Cetak_Baru,
			&liveReport.Perubahan_Elemen,
			&liveReport.Pergantian_Rusak,
			&liveReport.Pergantian_Hilang,
			&liveReport.Perihal_Lainnya,
			&liveReport.Sisa_Blanko,
			&liveReport.Akta_Kelahiran_Dibawah_18,
			&liveReport.Akta_Kelahiran_Diatas_18,
			&liveReport.Akta_Kematian,
			&liveReport.Cetak_Kia,
			&liveReport.Kartu_Keluarga,
			&liveReport.Pindah,
			&liveReport.Datang,
			&liveReport.Aktivasi_Ikd,
			&liveReport.Total_Aktivasi_Ikd,
		)
		helper.PanicIfError(err)
		liveReportAll = append(liveReportAll, liveReport)
	}

	return liveReportAll
}
