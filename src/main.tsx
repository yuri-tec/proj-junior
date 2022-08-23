import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Bar } from './components/Bar'
import { Footer} from './components/Footer'
import { Hero } from './components/Hero'
import { Meio } from './components/Meio'







ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Bar/>
      <Hero/>
      <Meio/>
  
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)
