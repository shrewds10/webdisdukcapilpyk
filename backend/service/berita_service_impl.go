package service

import (
	"backend/helper"
	"backend/model/web"
	"context"
	"database/sql"
)

type BeritaServiceImpl struct {
	db *sql.DB
}

func (service BeritaServiceImpl) Create(ctx context.Context, request web.BeritaCreateRequest) {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	// berita := entity.Berita{
	// 	Title:         request.Title,
	// 	Slug:          request.Slug,
	// 	Content:       request.Content,
	// 	Thumbnail_url: request.Thumbnail_url,
	// 	Author_id:     request.Author_id,
	// 	Category_id:   request.Category_id,
	// 	Status:        request.Status,
	// 	Create_at:     request.Create_at,
	// 	Update_at:     request.Update_at,
	// }

}
