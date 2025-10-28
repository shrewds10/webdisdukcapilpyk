import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import './datatable.css'

const title = [
    {judul: 'User',}
]

const columns = [
  { field: 'id', headerName: 'No', width: 70 },
  { field: 'firstName', headerName: 'Nama Depan', width: 150 },
  { field: 'lastName', headerName: 'Nama Belakang', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'role', headerName: 'Role', width: 130 },
  {
    field: 'age',
    headerName: 'Usia',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Nama Lengkap',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 170,
    renderCell:(params)=>{
      return(
        <>
          <span>{params.row.firstName} {params.row.lastName}</span>
        </>
      );
    },
  },
];

const rows = [
  { id: 1, email: 'email@gmail.com',lastName: 'Snow', firstName: 'Jon', age: 35, role: 'Admin' },
  { id: 2, email: 'email@gmail.com',lastName: 'Lannister', firstName: 'Cersei', age: 42, role: 'Admin super' },
  { id: 3, email: 'email@gmail.com',lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, email: 'email@gmail.com',lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, email: 'email@gmail.com',lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, email: 'email@gmail.com',lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, email: 'email@gmail.com',lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, email: 'email@gmail.com',lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, email: 'email@gmail.com',lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const Datatable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',      
      width: 200,
      renderCell: () => {
        return(
          <div className="cellAction">
            <span>
              <div className="viewButton">View</div>
              <div className="editButton">Edit</div>
            </span>
          </div>
        );
      },
    }
  ];
  return (
    <div className='datatable'>
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns.concat(actionColumn)}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    </div>
  )
}

export default Datatable