import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IoBrowsersSharp } from 'react-icons/io5'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
     
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
  
)
