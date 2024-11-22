package repository

import (
	"context"
	"database/sql"
	"go_import/model/entity"
)

type AgrLajuPertumbuhanPendudukRepositoryImpl struct {
}

func (agrLajuPertumbuhanPendudukRepository AgrLajuPertumbuhanPendudukRepositoryImpl) Create(ctx *context.Context, tx *sql.Tx, agreAgrLajuPertumbuhanPenduduk []entity.AgrLajuPertumbuhanPenduduk){
	
}
