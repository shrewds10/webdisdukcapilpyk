package repository

import (
	"backend/model/entity"
	"context"
	"database/sql"
)

type LiveReportRepository interface {
	Create(ctx context.Context, tx *sql.Tx, liveReport entity.LiveReport) entity.LiveReport
	FindAll(ctx context.Context, tx *sql.Tx) []entity.LiveReport
}
