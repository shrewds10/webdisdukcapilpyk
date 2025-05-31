package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type BeritaRepositoryImpl struct {
}

func (repository BeritaRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, berita entity.Berita) entity.Berita {
	// sqlQuery := "INSERT INTO LAYANAN SET (ID_JENIS_LAYANAN, NAMA_LAYANAN, PERSYARATAN, PENJELASAN) VALUES (?,?,?,?)"

	// _, err := tx.ExecContext(ctx, sqlQuery, layanan.Id_jenis_layanan, layanan.Nama_layanan, layanan.Persyaratan, layanan.Penjelasan)
	// helper.PanicIfError(err)

	return berita
}
