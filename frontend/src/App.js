import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import HomePage from './Pages/Home/Home'
import InformationPage from './Pages/Information/Information'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/information" element={<InformationPage/>}/>
      </Routes>
    </Router>    
  )
}

export default App