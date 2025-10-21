import "./table_user.css"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(news_id, title, content, category, author, status) {
  return { news_id, title, content, category, author, status };
}

const rows = [
  createData(
    1,
    "Disdukcapil Kota Payakumbuh Lakukan Perekaman KTP-el Bagi 88 Siswa Di SMA N 1 Kota Payakumbuh", 
    `Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Payakumbuh kembali melaksanakan kegiatan jemput bola yang dikemas dalam inovasi “Dukcapil Goes To School” dalam rangka perekaman Kartu Tanda Penduduk Elektronik (KTP-el) bagi pelajar di SMAN 1 Kota Payakumbuh, Rabu (08/10).
    Kegiatan ini menyasar 88 siswa yang telah berusia 16 tahun ke atas dan belum melakukan perekaman KTP-el. Langkah ini merupakan bagian dari program percepatan perekaman KTP-el bagi pemula, guna memastikan seluruh warga usia wajib KTP di Kota Payakumbuh telah memiliki dokumen kependudukan yang sah dan valid.`,
    "Inovasi", 
    "User 1", 
    "draft"
  ),
  createData(
    2,
    "Disdukcapil Kota Payakumbuh Lakukan Perekaman KTP-el Bagi 88 Siswa Di SMA N 1 Kota Payakumbuh", 
    `Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Payakumbuh kembali melaksanakan kegiatan jemput bola yang dikemas dalam inovasi “Dukcapil Goes To School” dalam rangka perekaman Kartu Tanda Penduduk Elektronik (KTP-el) bagi pelajar di SMAN 1 Kota Payakumbuh, Rabu (08/10).
    Kegiatan ini menyasar 88 siswa yang telah berusia 16 tahun ke atas dan belum melakukan perekaman KTP-el. Langkah ini merupakan bagian dari program percepatan perekaman KTP-el bagi pemula, guna memastikan seluruh warga usia wajib KTP di Kota Payakumbuh telah memiliki dokumen kependudukan yang sah dan valid.`,
    "Inovasi", 
    "User 1", 
    "published"
  ),
  createData(
    3,
    "Disdukcapil Kota Payakumbuh Lakukan Perekaman KTP-el Bagi 88 Siswa Di SMA N 1 Kota Payakumbuh", 
    `Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Payakumbuh kembali melaksanakan kegiatan jemput bola yang dikemas dalam inovasi “Dukcapil Goes To School” dalam rangka perekaman Kartu Tanda Penduduk Elektronik (KTP-el) bagi pelajar di SMAN 1 Kota Payakumbuh, Rabu (08/10).
    Kegiatan ini menyasar 88 siswa yang telah berusia 16 tahun ke atas dan belum melakukan perekaman KTP-el. Langkah ini merupakan bagian dari program percepatan perekaman KTP-el bagi pemula, guna memastikan seluruh warga usia wajib KTP di Kota Payakumbuh telah memiliki dokumen kependudukan yang sah dan valid.`,
    "Inovasi", 
    "User 1", 
    "archived"
  ),
  createData(
    4,
    "Disdukcapil Kota Payakumbuh Lakukan Perekaman KTP-el Bagi 88 Siswa Di SMA N 1 Kota Payakumbuh", 
    `Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Payakumbuh kembali melaksanakan kegiatan jemput bola yang dikemas dalam inovasi “Dukcapil Goes To School” dalam rangka perekaman Kartu Tanda Penduduk Elektronik (KTP-el) bagi pelajar di SMAN 1 Kota Payakumbuh, Rabu (08/10).
    Kegiatan ini menyasar 88 siswa yang telah berusia 16 tahun ke atas dan belum melakukan perekaman KTP-el. Langkah ini merupakan bagian dari program percepatan perekaman KTP-el bagi pemula, guna memastikan seluruh warga usia wajib KTP di Kota Payakumbuh telah memiliki dokumen kependudukan yang sah dan valid.`,
    "Inovasi", 
    "User 1", 
    "draft"
  ),
];

const TableUser = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Judul</TableCell>
            <TableCell align="left">Konten</TableCell>
            <TableCell align="left">Kategori</TableCell>
            <TableCell align="left">Editor</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.news_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.title.substring(0,40) + '...'}</TableCell>
              <TableCell align="left">{row.content.substring(0, 50) + '...'}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableUser