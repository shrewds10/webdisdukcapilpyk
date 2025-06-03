package repository

import (
	"backend/helper"
	"backend/model/entity"
	"context"
	"database/sql"
	"errors"
)

type NewsRepositoryImpl struct {
}

func NewNewsRepository() NewsRepository {
	return &NewsRepositoryImpl{}
}

func (repository NewsRepositoryImpl) Create(ctx context.Context, tx *sql.Tx, news entity.News) entity.News {
	sqlQuery := "INSERT INTO news (Title, Slug, Content, Thumbnail_url, Author_id, Category_id, Status, Create_at, Update_at) VALUES (?,?,?,?,?,?,?,?,?)"

	_, err := tx.ExecContext(ctx, sqlQuery, news.Title, news.Slug, news.Content, news.Thumbnail_url, news.Author_id, news.Category_id, news.Status, news.Create_at, news.Update_at)
	helper.PanicIfError(err)

	return news
}

func (repository NewsRepositoryImpl) Update(ctx context.Context, tx *sql.Tx, news entity.News) entity.News {
	sqlQuery := "UPDATE news SET title = ?, slug = ?, content = ?, thumbnail_url = ?, author_id = ?, category_id = ?, status = ?, create_at = ?, update_at = ? WHERE id = ?"

	_, err := tx.ExecContext(ctx, sqlQuery,
		news.Title,
		news.Slug,
		news.Content,
		news.Thumbnail_url,
		news.Author_id,
		news.Category_id,
		news.Status,
		news.Create_at,
		news.Update_at,
	)
	helper.PanicIfError(err)
	return news
}

func (repository NewsRepositoryImpl) Delete(ctx context.Context, tx *sql.Tx, newsId int) {
	sqlQuery := "DELETE FROM news WHERE id = ?"
	_, err := tx.ExecContext(ctx, sqlQuery, newsId)
	helper.PanicIfError(err)
}

func (repository NewsRepositoryImpl) FindById(ctx context.Context, tx *sql.Tx, newsId int) (entity.News, error) {
	sqlQuery := "SELECT * FROM news WHERE Id = ?"

	row, err := tx.QueryContext(ctx, sqlQuery, newsId)
	helper.PanicIfError(err)
	defer row.Close()

	news := entity.News{}
	if row.Next() {
		err := row.Scan(
			&news.Id,
			&news.Title,
			&news.Slug,
			&news.Content,
			&news.Thumbnail_url,
			&news.Author_id,
			&news.Category_id,
			&news.Status,
			&news.Create_at,
			&news.Update_at,
		)
		helper.PanicIfError(err)
		return news, nil
	} else {
		return news, errors.New("data not found")
	}
}

func (repository NewsRepositoryImpl) FindAll(ctx context.Context, tx *sql.Tx) []entity.News {
	sqlQuery := "SELECT * FROM news"
	rows, err := tx.QueryContext(ctx, sqlQuery)
	helper.PanicIfError(err)
	defer rows.Close()

	var newsAll []entity.News
	for rows.Next() {
		news := entity.News{}
		err := rows.Scan(
			&news.Id,
			&news.Title,
			&news.Slug,
			&news.Content,
			&news.Thumbnail_url,
			&news.Author_id,
			&news.Category_id,
			&news.Status,
			&news.Create_at,
			&news.Update_at,
		)
		helper.PanicIfError(err)
		newsAll = append(newsAll, news)
	}

	return newsAll
}
