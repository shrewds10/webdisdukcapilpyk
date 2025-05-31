package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type BeritaRepository interface {
	Create(ctx context.Context, tx *sql.Tx, berita entity.Berita) entity.Berita
	// Update()
	// Delete()
	// FindById()
	// FindAll()
}
