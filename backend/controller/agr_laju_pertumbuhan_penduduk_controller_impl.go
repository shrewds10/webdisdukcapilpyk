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

func NewAgrLajuPertumbuhanPendudukControll(agrLajuPertumbuhanPendudukService service.AgrLajuPertumbuhanPendudukService) UserController {
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
