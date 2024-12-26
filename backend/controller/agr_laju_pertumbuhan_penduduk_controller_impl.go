package controller

import (
	"go_import/helper"
	"go_import/model/web"
	"go_import/service"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
	"github.com/xuri/excelize/v2"
)

type AgrLajuPertumbuhanPendudukControllerImpl struct {
	service service.AgrLajuPertumbuhanPendudukService
}

func NewAgrLajuPertumbuhanPendudukControll(agrLajuPertumbuhanPendudukService service.AgrLajuPertumbuhanPendudukService) AgrLajuPertumbuhanPendudukController {
	return &AgrLajuPertumbuhanPendudukControllerImpl{
		service: agrLajuPertumbuhanPendudukService,
	}
}

func (controller AgrLajuPertumbuhanPendudukControllerImpl) Create(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	file, _, err := request.FormFile("file")
	helper.PanicIfError(err)

	xlsx, err := excelize.OpenReader(file)
	helper.PanicIfError(err)
	defer file.Close()

	rows, _ := xlsx.GetRows("Sheet1")
	var agrLajuPertumbuhanPendudukAll []web.AgrLajuPertumbuhanPendudukCreateRequest
	for i, row := range rows {
		agrLajuPertumbuhanPenduduk := web.AgrLajuPertumbuhanPendudukCreateRequest{}
		if i == 0 {
			continue
		}

		jmlPria, err := strconv.Atoi(row[6])
		helper.PanicIfError(err)

		jmlWanita, err := strconv.Atoi(row[7])
		helper.PanicIfError(err)

		agrLajuPertumbuhanPenduduk.Kode = row[0]
		agrLajuPertumbuhanPenduduk.Semester = 2
		agrLajuPertumbuhanPenduduk.Tahun = 24
		agrLajuPertumbuhanPenduduk.Pria = jmlPria
		agrLajuPertumbuhanPenduduk.Wanita = jmlWanita

		agrLajuPertumbuhanPendudukAll = append(agrLajuPertumbuhanPendudukAll, agrLajuPertumbuhanPenduduk)
	}
	controller.service.Create(request.Context(), agrLajuPertumbuhanPendudukAll)
}

func (controller AgrLajuPertumbuhanPendudukControllerImpl) Update(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	query := request.URL.Query()
	kode := query.Get("kode")
	semester := query.Get("semester")
	tahun := query.Get("tahun")

	semesterInt, err := strconv.Atoi(semester)
	helper.PanicIfError(err)

	tahunInt, err := strconv.Atoi(tahun)
	helper.PanicIfError(err)

	agrLajuPertumbuhanPendudukUpdate := web.AgrLajuPertumbuhanPendudukUpdateRequest{
		Kode:     kode,
		Semester: semesterInt,
		Tahun:    tahunInt,
		Pria:     2,
		Wanita:   2,
	}

	agrLajuPertumbuhanPendudukResponse := controller.service.Update(request.Context(), agrLajuPertumbuhanPendudukUpdate)
	agrLajuPertumbuhanPendudukUpdateResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   agrLajuPertumbuhanPendudukResponse,
	}

	helper.JsonEncode(writer, agrLajuPertumbuhanPendudukUpdateResponse)
}

func (controller AgrLajuPertumbuhanPendudukControllerImpl) Delete(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	query := request.URL.Query()
	kode := query.Get("kode")
	semester := query.Get("semester")
	tahun := query.Get("tahun")

	semesterInt, err := strconv.Atoi(semester)
	helper.PanicIfError(err)

	tahunInt, err := strconv.Atoi(tahun)
	helper.PanicIfError(err)

	controller.service.Delete(request.Context(), kode, semesterInt, tahunInt)

	agrLajuPertumbuhanPendudukResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   "",
	}

	helper.JsonEncode(writer, agrLajuPertumbuhanPendudukResponse)
}

func (controller AgrLajuPertumbuhanPendudukControllerImpl) FindById(writer http.ResponseWriter, request *http.Request, _ httprouter.Params) {
	query := request.URL.Query()
	kode := query.Get("kode")
	semester := query.Get("semester")
	tahun := query.Get("tahun")

	semesterInt, err := strconv.Atoi(semester)
	helper.PanicIfError(err)

	tahunInt, err := strconv.Atoi(tahun)
	helper.PanicIfError(err)

	agrLajuPertumbuhanPenduduk := controller.service.FindById(request.Context(), kode, semesterInt, tahunInt)

	agrLajuPertumbuhanPendudukResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   agrLajuPertumbuhanPenduduk,
	}

	helper.JsonEncode(writer, agrLajuPertumbuhanPendudukResponse)
}

func (controller AgrLajuPertumbuhanPendudukControllerImpl) FindAll(writer http.ResponseWriter, request *http.Request, params httprouter.Params) {
	agrLajuPertumbuhanPenduduk := controller.service.FindAll(request.Context())
	agrLajuPertumbuhanPendudukResponse := web.WebResponse{
		Code:   200,
		Status: "OK",
		Data:   agrLajuPertumbuhanPenduduk,
	}

	helper.JsonEncode(writer, agrLajuPertumbuhanPendudukResponse)
}
