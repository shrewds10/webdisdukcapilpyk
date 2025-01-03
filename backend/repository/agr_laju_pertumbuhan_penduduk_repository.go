package repository

import (
	"context"
	"database/sql"
	"backend/model/entity"
)

type AgrLajuPertumbuhanPendudukRepository interface {
	Create(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPenduduk []entity.AgrLajuPertumbuhanPenduduk)
	Update(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPenduduk entity.AgrLajuPertumbuhanPenduduk) entity.AgrLajuPertumbuhanPenduduk
	Delete(ctx context.Context, tx *sql.Tx, kode string, semester int, tahun int)
	FindById(ctx context.Context, tx *sql.Tx, kode string, semester int, tahun int) entity.AgrLajuPertumbuhanPenduduk
	FindAll(ctx context.Context, tx *sql.Tx) []entity.AgrLajuPertumbuhanPenduduk
}
