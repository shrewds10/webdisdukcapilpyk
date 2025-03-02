package service

import (
	"backend/model/web"
	"context"
)

type LayananService interface {
	Create(ctx context.Context, request web.LayananCreateRequest) web.LayananResponse
}
