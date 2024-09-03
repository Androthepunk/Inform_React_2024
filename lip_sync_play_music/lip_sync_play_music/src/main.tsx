//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { Header } from './Compoents/Header.tsx'
import { Footer } from './Compoents/Footer.tsx'
//import Principal from './Principal.tsx'
import React from 'react'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/*<Principal/>*/}
    <App/>
    <Footer />
  </React.StrictMode>,
)
