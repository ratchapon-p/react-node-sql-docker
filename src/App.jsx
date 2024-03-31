import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import LoginPage from './pages/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<LoginPage />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
