package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type NewsRepository interface {
	Create(ctx context.Context, tx *sql.Tx, news entity.News) entity.News
	// Update()
	// Delete()
	FindById(ctx context.Context, tx *sql.Tx, newsId int) (entity.News, error)
	// FindAll()
}
