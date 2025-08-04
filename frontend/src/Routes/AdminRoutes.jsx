import HomeAdmin from '../pages/admin/home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<HomeAdmin/>}/>
    </Routes>
  )
}

export default AdminRoutes