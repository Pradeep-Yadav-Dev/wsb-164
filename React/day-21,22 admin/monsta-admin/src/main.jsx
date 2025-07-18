import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddColor from './pages/color/AddColor.jsx'
import ViewColor from './pages/color/ViewColor.jsx'
import Home from './pages/Home.jsx'
import AddMaterials from './pages/materials/AddMaterials.jsx'
import ViewMaterials from './pages/materials/viewMaterials.jsx'
import UpdateMaterials from './pages/materials/UpdateMaterials.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />

        <Route path='/dashboard' element={<Layout />}  >

          <Route index element={<Home />} />

          <Route path='color' >
            <Route path='add' element={<AddColor />} />
            <Route path='view' element={<ViewColor />} />

          </Route>


          <Route path='materials'>
            <Route path='add' element={<AddMaterials />} />
            <Route path='view' element={<ViewMaterials />} />
            <Route path='update/:id?' element={<UpdateMaterials />} />
          </Route>

        </Route>


      </Routes>

    </BrowserRouter>

  </StrictMode>,
)
