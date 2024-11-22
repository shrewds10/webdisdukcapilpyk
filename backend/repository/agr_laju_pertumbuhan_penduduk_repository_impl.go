package repository

import (
	"context"
	"database/sql"
	"go_import/helper"
	"go_import/model/entity"
)

type AgrLajuPertumbuhanPendudukRepositoryImpl struct {
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) Create(ctx *context.Context, tx *sql.Tx, agreAgrLajuPertumbuhanPenduduk []entity.AgrLajuPertumbuhanPenduduk) {
	sqlQuery := "INSERT INTO AGR_LAJU_PERTUMBUHAN_PENDUDUK (KODE, SEMESTER, TAHUN, PRIA, WANITA) VALUES (?,?,?,?,?)"

	for i := 0; i < len(agreAgrLajuPertumbuhanPenduduk); i++ {
		_, err := tx.ExecContext(ctx, sqlQuery, agrLajuPertumbuhanPendudukRepository[i].KODE, user[i].SEMESTER)
		helper.PanicIfError(err)
	}
}
