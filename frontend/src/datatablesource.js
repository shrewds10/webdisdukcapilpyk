export const userColumns = [
    { field: 'id', headerName: 'No', width: 70 },
    {
        field: 'fullName',
        headerName: 'Nama Lengkap',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 280,
        renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                <span>{params.row.firstName} {params.row.lastName}</span>
            </div>
        );
        },
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'role', headerName: 'Role', width: 150 },
    { field: 'age', headerName: 'Usia', width: 90,},
    
];

export const userRows = [
  { id: 1, email: 'email@gmail.com',lastName: 'Snow', firstName: 'Jon', age: 35, role: 'Admin', img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" },
  { id: 2, email: 'email@gmail.com',lastName: 'Lannister', firstName: 'Cersei', age: 42, role: 'Admin super', img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" },
  { id: 3, email: 'email@gmail.com',lastName: 'Lannister', firstName: 'Jaime', age: 45, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'Admin'  },
  { id: 4, email: 'email@gmail.com',lastName: 'Stark', firstName: 'Arya', age: 16, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'User'},
  { id: 5, email: 'email@gmail.com',lastName: 'Targaryen', firstName: 'Daenerys', age: null, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'User'},
  { id: 6, email: 'email@gmail.com',lastName: 'Melisandre', firstName: null, age: 150, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'User'},
  { id: 7, email: 'email@gmail.com',lastName: 'Clifford', firstName: 'Ferrara', age: 44, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'User'},
  { id: 8, email: 'email@gmail.com',lastName: 'Frances', firstName: 'Rossini', age: 36, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'User'},
  { id: 9, email: 'email@gmail.com',lastName: 'Roxie', firstName: 'Harvey', age: 65, img:"https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png", role: 'User'},
];