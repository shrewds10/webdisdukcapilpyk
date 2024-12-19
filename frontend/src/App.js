import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./app.css"
import HomePage from './Pages/Home'
import InformationPage from './Pages/Information'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/information" element={<HomePage/>}/>
        <Route path="/" element={<InformationPage/>}/>
      </Routes>
    </Router>    
  )
}

export default App