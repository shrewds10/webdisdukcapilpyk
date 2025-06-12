package service

import (
	"backend/model/web"
	"context"
)

type NewsService interface {
	Create(ctx context.Context, request web.NewsCreateRequest) web.NewsResponse
	Update(ctx context.Context, request web.NewsUpdateRequest) web.NewsResponse
	Delete(ctx context.Context, newsId int)
	FindById(ctx context.Context, newsId int) web.NewsResponse
	FindAll(ctx context.Context) []web.NewsResponse
}
