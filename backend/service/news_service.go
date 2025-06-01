package service

import (
	"backend/model/web"
	"context"
)

type NewsService interface {
	Create(ctx context.Context, request web.NewsCreateRequest) web.NewsResponse
	// Update()
	// Delete()
	FindById(ctx context.Context, newsId int) web.NewsResponse
	// FindAll()
}
