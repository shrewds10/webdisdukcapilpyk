import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import PublicRoutes from './Routes/PublicRoutes'


const App = () => {
  return (
    <Router>
      {PublicRoutes()}
    </Router>    
  )
}

export default App