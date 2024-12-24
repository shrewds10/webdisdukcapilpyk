package service

import (
	"context"
	"go_import/model/web"
)

type AgrLajuPertumbuhanPendudukService interface {
	Create(ctx context.Context, agrLajuPertumbuhanPenduduk []web.AgrLajuPertumbuhanPendudukCreateRequest)
	// Update(ctx context.Context, agrLajuPertumbuhanPendudukId web.AgrLajuPertumbuhanPendudukUpdateRequest) web.AgrLajuPertumbuhanPendudukResponse
	// Delete(ctx context.Context, agrLajuPertumbuhanPendudukId int)
	FindById(ctx context.Context, agrLajuPertumbuhanPendudukId int) web.AgrLajuPertumbuhanPendudukResponse
	// FindAll(ctx context.Context) []web.AgrLajuPertumbuhanPendudukResponse
}
