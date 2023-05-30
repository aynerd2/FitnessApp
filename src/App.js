import React from 'react'
import './App.css'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import Navbar from './component/Navbar'
import Footer from './component/Footer'



const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetails/>} />
    </Routes>

    <Footer/>
    </Box>
  )
}

export default App