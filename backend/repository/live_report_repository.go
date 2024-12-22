package repository

import (
	"context"
	"database/sql"
	"go_import/model/entity"
)

type LiveReportRepository interface {
	Create(ctx context.Context, tx *sql.Tx, liveReport entity.LiveReport) entity.LiveReport
	FindAll(ctx context.Context, tx *sql.Tx) []entity.LiveReport
}
