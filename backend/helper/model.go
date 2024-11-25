package helper

import (
	"go_import/model/entity"
	"go_import/model/web"
)

func ToUserResponse(user entity.User) web.UserResponse {
	return web.UserResponse{
		Id:    user.Id,
		Name:  user.Name,
		Email: user.Email,
	}
}

func ToAgrLahuPertumbuhanPendudukResponse(agrLajuPertumbuhanPendudukResponse entity.AgrLajuPertumbuhanPenduduk) web.AgrLajuPertumbuhanPendudukResponse {
	return web.AgrLajuPertumbuhanPendudukResponse{
		Kode:     agrLajuPertumbuhanPendudukResponse.Kode,
		Semester: agrLajuPertumbuhanPendudukResponse.Semester,
		Tahun:    agrLajuPertumbuhanPendudukResponse.Tahun,
		Pria:     agrLajuPertumbuhanPendudukResponse.Pria,
		Wanita:   agrLajuPertumbuhanPendudukResponse.Wanita,
	}
}

func ToAgrLahuPertumbuhanPendudukResponses(agrLajuPertumbuhanPendudukAll []entity.AgrLajuPertumbuhanPenduduk) []web.AgrLajuPertumbuhanPendudukResponse {
	var agrLajuPertumbuhanPendudukResponses []web.AgrLajuPertumbuhanPendudukResponse
	for _, agrLajuPertumbuhanPenduduk := range agrLajuPertumbuhanPendudukAll {
		agrLajuPertumbuhanPendudukResponses = append(agrLajuPertumbuhanPendudukResponses, ToAgrLahuPertumbuhanPendudukResponse(agrLajuPertumbuhanPenduduk))
	}
	return agrLajuPertumbuhanPendudukResponses
}
