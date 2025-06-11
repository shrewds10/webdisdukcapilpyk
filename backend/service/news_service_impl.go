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
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	newsUpdate, err := service.repository.FindById(ctx, tx, request.Id)
	newsUpdate.Title = request.Title
	newsUpdate.Slug = request.Slug
	newsUpdate.Content = request.Content
	newsUpdate.Thumbnail_url = request.Thumbnail_url
	newsUpdate.Status = request.Status
	newsUpdate.Author_id = request.Author_id
	newsUpdate.Category_id = request.Category_id
	newsUpdate.Create_at = request.Create_at
	newsUpdate.Update_at = request.Update_at

	service.repository.Update(ctx, tx, newsUpdate)

	news := web.NewsResponse{
		Id:            newsUpdate.Id,
		Title:         newsUpdate.Title,
		Slug:          newsUpdate.Slug,
		Content:       newsUpdate.Content,
		Thumbnail_url: newsUpdate.Thumbnail_url,
		Author_id:     newsUpdate.Category_id,
		Category_id:   newsUpdate.Author_id,
		Status:        newsUpdate.Status,
		Create_at:     newsUpdate.Create_at,
		Update_at:     newsUpdate.Update_at,
	}

	return news
}

func (service NewsServiceImpl) Delete(ctx context.Context, newsId int) {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	service.repository.Delete(ctx, tx, newsId)
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

func (service NewsServiceImpl) FindAll(ctx context.Context) []web.WebResponse {
	tx, err := service.db.Begin()
	helper.PanicIfError(err)
	defer helper.RollbackOrCommit(tx)

	news := service.repository.FindAll(ctx, tx)

	return helper.ToNewsResponse(writer, news)
}
