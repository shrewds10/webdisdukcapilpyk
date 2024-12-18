package service

import (
	"context"
	"go_import/model/web"
)

type LiveReportService interface {
	Create(ctx context.Context, request web.LiveReportCreateReqest) web.LiveReportResponse
}
