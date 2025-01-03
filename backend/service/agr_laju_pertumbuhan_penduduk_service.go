package service

import (
	"backend/model/web"
	"context"
)

type AgrLajuPertumbuhanPendudukService interface {
	Create(ctx context.Context, agrLajuPertumbuhanPenduduk []web.AgrLajuPertumbuhanPendudukCreateRequest)
	Update(ctx context.Context, agrLajuPertumbuhanPendudukId web.AgrLajuPertumbuhanPendudukUpdateRequest) web.AgrLajuPertumbuhanPendudukResponse
	Delete(ctx context.Context, kode string, semester, tahun int)
	FindById(ctx context.Context, kode string, semester int, tahun int) web.AgrLajuPertumbuhanPendudukResponse
	FindAll(ctx context.Context) []web.AgrLajuPertumbuhanPendudukResponse
}
