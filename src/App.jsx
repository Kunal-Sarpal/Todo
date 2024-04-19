import{ useEffect, useState } from "react";
import CreatedTodo from "./components/CreatedTodo";
import Todo from "./components/Todo";
// import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
 
        
 // Empty dependency array to ensure the effect runs only once
 

  return (
    
    <div className="relative">
  
     <Routes>
      <Route path="/login" element={<Login/>}></Route>
    
      <Route path="/home" element={<Home/>}></Route>
  
      
     </Routes>
    </div>
  );
}

export default App;
