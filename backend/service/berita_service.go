package service

import (
	"backend/model/web"
	"context"
)

type BeritaService interface {
	Create(ctx context.Context, request web.BeritaCreateRequest) web.LayananResponse
	// Update()
	// Delete()
	// FindById()
	// FindAll()
}
