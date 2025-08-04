import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import PublicRoutes from './routes/PublicRoutes'
import AdminRoutes from './routes/AdminRoutes'


const App = () => {
  return (
    <Router>
      <PublicRoutes/>
      <AdminRoutes/>
    </Router>    
  )
}

export default App