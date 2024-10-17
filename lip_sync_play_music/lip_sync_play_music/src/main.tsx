//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Compoents/Header.tsx'
import { Footer } from './Compoents/Footer.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './Compoents/SideBar.tsx'
import App from './App.tsx'
import ComponentsList from './Compoents/All_nav/ComponentsList.tsx'
import { Home } from './Home.tsx'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header/>
    <SideBar />
         <Routes>                
             <Route path="/" element={<Home/>}/>
              <Route path="/App" element={<App/>}/>
               <Route path="/ComponentsList" element={<ComponentsList/>} />
          </Routes>
       <Footer />
    
  </BrowserRouter>
)
