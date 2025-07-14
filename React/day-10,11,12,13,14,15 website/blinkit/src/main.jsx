import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './commons/Header'
import Footer from './commons/Footer'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Purchase from './Purchase'
import Cart from './Cart'
import Category from './Category'
import BlinkitContext from './context/BlinkitContext'
import Login from './Login'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BlinkitContext>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<Purchase />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category' element={<Category />} />
         <Route path='/login' element={<Login />} />
      </Routes>
    </BlinkitContext>
  </BrowserRouter>
)
