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

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPenduduk entity.AgrLajuPertumbuhanPenduduk) entity.AgrLajuPertumbuhanPenduduk {
	sqlQuery := `UPDATE AGR_LAJU_PERTUMBUHAN_PENDUDUK SET 
		KODE = ? 
		SEMESTER = ? 
		TAHUN = ? 
		PRIA = ? 
		WANITA = ?
		WHERE ID = ?`

	_, err := tx.ExecContext(ctx, sqlQuery, agrLajuPertumbuhanPenduduk.Kode, agrLajuPertumbuhanPenduduk.Semester, agrLajuPertumbuhanPenduduk.Tahun, agrLajuPertumbuhanPenduduk.Pria, agrLajuPertumbuhanPenduduk.Wanita)
	helper.PanicIfError(err)

	return agrLajuPertumbuhanPenduduk
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPendudukId int) {
	sqlQuery := "DELETE FROM AGR_LAJU_PERTUMBUHAN_PENDUDUK WHERE ID = ?"
	_, err := tx.ExecContext(ctx, sqlQuery)
	helper.PanicIfError(err)
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) FindById(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPendudukId int) entity.AgrLajuPertumbuhanPenduduk {
	sqlQuery := "SELECT * FROM AGR_LAJU_PERTUMBUHAN_PENDUDUK WHERE ID = ?"
	rows, err := tx.QueryContext(ctx, sqlQuery)
	helper.PanicIfError(err)

	agrLajuPertumbuhanPenduduk := entity.AgrLajuPertumbuhanPenduduk{}
	if rows.Next() {
		err := rows.Scan(
			&agrLajuPertumbuhanPenduduk.Kode,
			&agrLajuPertumbuhanPenduduk.Semester,
			&agrLajuPertumbuhanPenduduk.Tahun,
			&agrLajuPertumbuhanPenduduk.Pria,
			&agrLajuPertumbuhanPenduduk.Wanita,
		)
		helper.PanicIfError(err)
	}
	return agrLajuPertumbuhanPenduduk
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []entity.AgrLajuPertumbuhanPenduduk {
	sqlQuery := "SELECT * FROM AGR_ALJU_PERTUMBUHAN_PENDUDUK"
	rows, err := tx.QueryContext(ctx, sqlQuery)
	helper.PanicIfError(err)
	defer rows.Close()

	var agrLajuPertumbuhanPendudukAll []entity.AgrLajuPertumbuhanPenduduk
	for rows.Next() {
		agrLajuPertumbuhanPenduduk := entity.AgrLajuPertumbuhanPenduduk{}
		err := rows.Scan(&agrLajuPertumbuhanPenduduk)
		helper.PanicIfError(err)
		agrLajuPertumbuhanPendudukAll = append(agrLajuPertumbuhanPendudukAll, agrLajuPertumbuhanPenduduk)
	}

	return agrLajuPertumbuhanPendudukAll
}
