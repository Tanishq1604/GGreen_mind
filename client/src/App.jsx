import React from "react";
import Login from "./login";
import {Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./dashboard";
import Home from "./home";
import Trashout from "./trashout";
import Explore from "./explore";
import "./postbox.css"
import "./explore.css"
import "./karma.css"
import New from "./new";
import Upload  from "./upload.jsx";
import Karma from './karma.jsx'



export default function App() {
  return (
    <Routes>
      <Route element={<Navigate to="/login" />} path="/" />
      <Route path="/login" element={<Login />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trash" element={<Trashout/>}></Route>

      <Route path="/explore" element={<Explore />} />

      <Route path="/explore" element={<Home />} />
      <Route path="/new" element = {<New/>}/>
      <Route path="/upload" element = {<Upload/>}/>
      <Route path="/karma" element = {<Karma/>}/>

    </Routes>
    
  
    
  )
}

