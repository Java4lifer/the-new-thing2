import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './templates/home'
import Login from './templates/Login'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './templates/NotFound'

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* class is wrong */}
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/home' Component={Home}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)