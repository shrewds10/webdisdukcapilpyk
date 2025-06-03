package service

import (
	"backend/exception"
	"backend/helper"
	"backend/model/entity"
	"backend/model/web"
	"backend/repository"
	"context"
	"database/sql"
)

type NewsServiceImpl struct {
	repository repository.NewsRepository
	db         *sql.DB
}

func NewNewsService(db *sql.DB, repository repository.NewsRepository) NewsService {
	return &NewsServiceImpl{
		repository: repository,
		db:         db,
	}
}

func (service NewsServiceImpl) Create(ctx context.Context, request web.NewsCreateRequest) web.NewsResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	news := entity.News{
		Title:         request.Title,
		Slug:          request.Slug,
		Content:       request.Content,
		Thumbnail_url: request.Thumbnail_url,
		Author_id:     request.Author_id,
		Category_id:   request.Category_id,
		Status:        request.Status,
		Create_at:     request.Create_at,
		Update_at:     request.Update_at,
	}

	newsResponse := service.repository.Create(ctx, tx, news)

	return helper.ToNewsResponse(newsResponse)
}

func (service NewsServiceImpl) Update(ctx context.Context, request web.NewsUpdateRequest) web.NewsResponse {

	return request
}

func (service NewsServiceImpl) FindById(ctx context.Context, newsId int) web.NewsResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	news, err := service.repository.FindById(ctx, tx, newsId)
	if err != nil {
		panic(exception.NewNotFoundError(err.Error()))
	}

	return helper.ToNewsResponse(news)
}
