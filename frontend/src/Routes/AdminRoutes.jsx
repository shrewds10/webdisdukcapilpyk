import HomeAdmin from '../pages/admin/home/Home'
import Login from '../pages/admin/login/Login'
import List from '../pages/admin/list/List'
import Single from '../pages/admin/single/Single'
import New from '../pages/admin/new/New'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { userInput } from '../formSource'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/admin" element={<HomeAdmin/>}/>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs = {userInput} title = "Tambahkan User"/>}/>
        </Route>
    </Routes>
  )
}

export default AdminRoutes