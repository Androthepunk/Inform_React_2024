import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.tsx'
//import './index.css'
import Principal from './Principal.tsx'
import { Header } from './Compoents/Header.tsx'
import { Footer } from './Compoents/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Principal/>
    <Footer />
  </StrictMode>,
)