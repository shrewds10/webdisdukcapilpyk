package repository

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
)

type AgrLajuPertumbuhanPendudukRepositoryImpl struct {
}

func NewAgrLajuPertumbuhanPendudukRepository() *AgrLajuPertumbuhanPendudukRepositoryImpl {
	return &AgrLajuPertumbuhanPendudukRepositoryImpl{}
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPenduduk []entity.AgrLajuPertumbuhanPenduduk) {
	sqlQuery := "INSERT INTO AGR_LAJU_PERTUMBUHAN_PENDUDUK (KODE, SEMESTER, TAHUN, PRIA, WANITA) VALUES (?,?,?,?,?)"

	for i := 0; i < len(agrLajuPertumbuhanPenduduk); i++ {
		_, err := tx.ExecContext(
			ctx, sqlQuery,
			agrLajuPertumbuhanPenduduk[i].Kode,
			agrLajuPertumbuhanPenduduk[i].Semester,
			agrLajuPertumbuhanPenduduk[i].Tahun,
			agrLajuPertumbuhanPenduduk[i].Pria,
			agrLajuPertumbuhanPenduduk[i].Wanita,
		)
		helper.PanicIfError(err)
	}
}
