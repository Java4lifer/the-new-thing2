import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './templates/home'
import Login from './templates/Login'
import NotFound from './templates/NotFound'
import SignUp from './templates/SignUp'

const root = document.getElementById("root")!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {/* class is wrong */}
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/home' Component={Home}/>
        <Route path='/*' Component={NotFound}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
