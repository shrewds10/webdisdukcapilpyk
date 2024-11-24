package repository

import (
	"context"
	"database/sql"
	"go_import/model/entity"
)

type AgrLajuPertumbuhanPendudukRepository interface {
	Create(ctx context.Context, tx *sql.Tx, agrLajuPertumbuhanPenduduk []entity.AgrLajuPertumbuhanPenduduk)
}
