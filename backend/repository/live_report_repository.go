package repository

import (
	"context"
	"database/sql"
	"net/http"
)

type LiveReportRepository interface {
	Create(ctx context.Context, tx *sql.Tx, request *http.Request)
}
