import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sale from './Sale.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import NotFound from './NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
  </BrowserRouter>
)
