package service

import (
	"backend/model/web"
	"context"
)

type LiveReportService interface {
	Create(ctx context.Context, request web.LiveReportCreateReqest) web.LiveReportResponse
	// Update(ctx context.Context, request web.)
	// FindById(ctx context.Context, liveReportId int) web.LiveReportResponse
	FindAll(ctx context.Context) []web.LiveReportResponse
}
