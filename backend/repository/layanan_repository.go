package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type LayananRepository interface {
	Create(ctx context.Context, tx *sql.Tx, layanan entity.Layanan) entity.Layanan
}
