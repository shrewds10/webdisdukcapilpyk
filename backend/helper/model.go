package helper

import (
	"backend/model/entity"
	"backend/model/web"
)

func ToUserResponse(user entity.User) web.UserResponse {
	return web.UserResponse{
		Id:        user.Id,
		Nama:      user.Nama,
		Email:     user.Email,
		Password:  user.Password,
		Role:      user.Role,
		Create_at: user.Create_at,
		Update_at: user.Update_at,
	}
}

func ToUserResponses(userAll []entity.User) []web.UserResponse {
	var userResponses []web.UserResponse
	for _, user := range userAll {
		userResponses = append(userResponses, ToUserResponse(user))
	}
	return userResponses
}

func ToAgrLajuPertumbuhanPendudukResponse(agrLajuPertumbuhanPendudukResponse entity.AgrLajuPertumbuhanPenduduk) web.AgrLajuPertumbuhanPendudukResponse {
	return web.AgrLajuPertumbuhanPendudukResponse{
		Kode:     agrLajuPertumbuhanPendudukResponse.Kode,
		Semester: agrLajuPertumbuhanPendudukResponse.Semester,
		Tahun:    agrLajuPertumbuhanPendudukResponse.Tahun,
		Pria:     agrLajuPertumbuhanPendudukResponse.Pria,
		Wanita:   agrLajuPertumbuhanPendudukResponse.Wanita,
	}
}

func ToAgrLajuPertumbuhanPendudukResponses(agrLajuPertumbuhanPendudukAll []entity.AgrLajuPertumbuhanPenduduk) []web.AgrLajuPertumbuhanPendudukResponse {
	var agrLajuPertumbuhanPendudukResponses []web.AgrLajuPertumbuhanPendudukResponse
	for _, agrLajuPertumbuhanPenduduk := range agrLajuPertumbuhanPendudukAll {
		agrLajuPertumbuhanPendudukResponses = append(agrLajuPertumbuhanPendudukResponses, ToAgrLajuPertumbuhanPendudukResponse(agrLajuPertumbuhanPenduduk))
	}
	return agrLajuPertumbuhanPendudukResponses
}

func ToLiveReportResponse(liveReportResponse entity.LiveReport) web.LiveReportResponse {
	return web.LiveReportResponse{
		Perekaman:                 liveReportResponse.Perekaman,
		Cetak_Baru:                liveReportResponse.Cetak_Baru,
		Perubahan_Elemen:          liveReportResponse.Perubahan_Elemen,
		Pergantian_Rusak:          liveReportResponse.Pergantian_Rusak,
		Pergantian_Hilang:         liveReportResponse.Pergantian_Hilang,
		Perihal_Lainnya:           liveReportResponse.Perihal_Lainnya,
		Sisa_Blanko:               liveReportResponse.Sisa_Blanko,
		Akta_Kelahiran_Dibawah_18: liveReportResponse.Akta_Kelahiran_Dibawah_18,
		Akta_Kelahiran_Diatas_18:  liveReportResponse.Akta_Kelahiran_Diatas_18,
		Akta_Kematian:             liveReportResponse.Akta_Kematian,
		Cetak_Kia:                 liveReportResponse.Cetak_Kia,
		Kartu_Keluarga:            liveReportResponse.Kartu_Keluarga,
		Pindah:                    liveReportResponse.Pindah,
		Datang:                    liveReportResponse.Datang,
		Aktivasi_Ikd:              liveReportResponse.Aktivasi_Ikd,
		Total_Aktivasi_Ikd:        liveReportResponse.Total_Aktivasi_Ikd,
		Tanggal:                   liveReportResponse.Tanggal,
	}
}

func ToLiveReportResponses(liveReportAll []entity.LiveReport) []web.LiveReportResponse {
	var liveReportResponses []web.LiveReportResponse

	for _, liveReportResponse := range liveReportAll {
		liveReportResponses = append(liveReportResponses, ToLiveReportResponse(liveReportResponse))
	}

	return liveReportResponses
}

func ToLayananResponse(layananResponse entity.Layanan) web.LayananResponse {
	return web.LayananResponse{
		Id:               layananResponse.Id,
		Id_jenis_layanan: layananResponse.Id_jenis_layanan,
		Nama_layanan:     layananResponse.Nama_layanan,
		Persyaratan:      layananResponse.Persyaratan,
		Penjelasan:       layananResponse.Penjelasan,
	}
}

func ToNewsResponse(news entity.News) web.NewsResponse {
	return web.NewsResponse{
		Id:            news.Id,
		Title:         news.Title,
		Slug:          news.Slug,
		Content:       news.Content,
		Thumbnail_url: news.Thumbnail_url,
		Author_id:     news.Author_id,
		Category_id:   news.Category_id,
		Status:        news.Status,
		Create_at:     news.Create_at,
		Update_at:     news.Update_at,
	}
}

func ToNewsResponses(newsAll []entity.News) []web.NewsResponse {
	var newsResponses []web.NewsResponse
	for _, news := range newsAll {
		newsResponses = append(newsResponses, ToNewsResponse(news))
	}
	return newsResponses
}
