package repository

import (
	"backend/helper"
	"backend/model/entity"
	"context"
	"database/sql"
)

type AgrLajuPertumbuhanPendudukRepositoryImpl struct {
}

func NewAgrLajuPertumbuhanPendudukRepository() AgrLajuPertumbuhanPendudukRepository {
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
	sqlQuery := "UPDATE AGR_LAJU_PERTUMBUHAN_PENDUDUK SET PRIA = ?, WANITA = ? WHERE KODE = ? AND SEMESTER = ? AND TAHUN = ?"
	_, err := tx.ExecContext(
		ctx, sqlQuery,
		agrLajuPertumbuhanPenduduk.Pria,
		agrLajuPertumbuhanPenduduk.Wanita,
		agrLajuPertumbuhanPenduduk.Kode,
		agrLajuPertumbuhanPenduduk.Semester,
		agrLajuPertumbuhanPenduduk.Tahun,
	)
	helper.PanicIfError(err)

	return agrLajuPertumbuhanPenduduk
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, kode string, semester int, tahun int) {
	sqlQuery := "DELETE FROM AGR_LAJU_PERTUMBUHAN_PENDUDUK WHERE KODE = ? AND SEMESTER = ? AND TAHUN = ?"
	_, err := tx.ExecContext(ctx, sqlQuery, kode, semester, tahun)
	helper.PanicIfError(err)
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) FindById(ctx context.Context, tx *sql.Tx, kode string, semester int, tahun int) entity.AgrLajuPertumbuhanPenduduk {
	sqlQuery := "SELECT * FROM AGR_LAJU_PERTUMBUHAN_PENDUDUK WHERE KODE = ? AND SEMESTER = ? AND TAHUN = ?"
	rows, err := tx.QueryContext(ctx, sqlQuery, kode, semester, tahun)
	helper.PanicIfError(err)
	defer rows.Close()

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
	sqlQuery := "SELECT * FROM AGR_LAJU_PERTUMBUHAN_PENDUDUK"
	rows, err := tx.QueryContext(ctx, sqlQuery)
	helper.PanicIfError(err)
	defer rows.Close()

	var agrLajuPertumbuhanPendudukAll []entity.AgrLajuPertumbuhanPenduduk
	for rows.Next() {
		agrLajuPertumbuhanPenduduk := entity.AgrLajuPertumbuhanPenduduk{}
		err := rows.Scan(&agrLajuPertumbuhanPenduduk.Kode, &agrLajuPertumbuhanPenduduk.Semester, &agrLajuPertumbuhanPenduduk.Tahun, &agrLajuPertumbuhanPenduduk.Pria, &agrLajuPertumbuhanPenduduk.Wanita)
		helper.PanicIfError(err)
		agrLajuPertumbuhanPendudukAll = append(agrLajuPertumbuhanPendudukAll, agrLajuPertumbuhanPenduduk)
	}

	return agrLajuPertumbuhanPendudukAll
}
