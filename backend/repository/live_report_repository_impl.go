package repository

import (
	"context"
	"database/sql"
	"net/http"
)

type LiveReportRepositoryImpl struct {
}

func (repository LiveReportRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, request *http.Request) {
	sqlQuery := `INSERT INTO live_report(PEREKAMAN,CETAK_BARU,PERUBAHAN_ELEMEN,PERGANTIAN_RUSAK,PERGANTIAN_HILANG,PERIHAL_LAINNYA,SISA_BLANKO,
	AKTA_KELAHIRAN_DIBAWAH_18,AKTA_KELAHIRAN_DIATAS_18,AKTA_KEMATIAN,CETAK_KIA,KARTU_KELUARGA,PINDAH,DATANG,AKTIVASI_IKD,TOTAL_AKTIVASI_IKD,TANGGAL)
	VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
	test
}
