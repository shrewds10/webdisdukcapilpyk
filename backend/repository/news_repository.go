package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type NewsRepository interface {
	Create(ctx context.Context, tx *sql.Tx, news entity.News) entity.News
	Update(ctx context.Context, tx *sql.Tx, news entity.News) entity.News
	Delete(ctx context.Context, tx *sql.Tx, newsId int)
	FindById(ctx context.Context, tx *sql.Tx, newsId int) (entity.News, error)
	FindAll(ctx context.Context, tx *sql.Tx) []entity.News
}
