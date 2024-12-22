package web

type LiveReportUpdateRequest struct {
	Id                        int
	Perekaman                 int
	Cetak_Baru                int
	Perubahan_Elemen          int
	Pergantian_Rusak          int
	Pergantian_Hilang         int
	Perihal_Lainnya           int
	Sisa_Blanko               int
	Akta_Kelahiran_Dibawah_18 int
	Akta_Kelahiran_Diatas_18  int
	Akta_Kematian             int
	Cetak_Kia                 int
	Kartu_Keluarga            int
	Pindah                    int
	Datang                    int
	Aktivasi_Ikd              int
	Total_Aktivasi_Ikd        int
	Tanggal                   string
}
