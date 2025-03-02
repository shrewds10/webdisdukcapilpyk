package repository

import (
	"backend/helper"
	"backend/model/entity"
	"context"
	"database/sql"
)

type LayananRepositoryImpl struct {
}

func (repository LayananRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, layanan entity.Layanan) entity.Layanan {
	sqlQuery := "INSERT INTO LAYANAN SET (ID_JENIS_LAYANAN, NAMA_LAYANAN, PERSYARATAN, PENJELASAN) VALUES (?,?,?,?)"

	_, err := tx.ExecContext(ctx, sqlQuery, layanan.Id_jenis_layanan, layanan.Nama_layanan, layanan.Persyaratan, layanan.Penjelasan)
	helper.PanicIfError(err)

	return layanan
}
