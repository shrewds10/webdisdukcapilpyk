package service

import (
	"context"
	"go_import/model/web"
)

type AgrLajuPertumbuhanPendudukService interface {
	Create(ctx context.Context, request []web.AgrLajuPertumbuhanPendudukCreateRequest)
}
