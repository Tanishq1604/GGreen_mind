import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './sidebar.css';
import './header.css';
import './dashboard.css';
import './new.css';

const root= createRoot(document.querySelector("#root"));


root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
    
    
    
    
  
);