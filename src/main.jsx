import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
