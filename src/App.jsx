import{ useEffect, useState } from "react";
import CreatedTodo from "./components/CreatedTodo";
import Todo from "./components/Todo";
// import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Marquee from "react-fast-marquee";

function App() {
 
        
 // Empty dependency array to ensure the effect runs only once
 

  return (
    
    <div className="relative">
    <Marquee className="flex w-full  gap-10 h-5">
          <div className="m-3 text-xl font-bold border-[1px] border-black p-1 text-black">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-sm font-bold border-[1px] border-black p-1 textt-black">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xl font-bold border-[1px] border-black p-1 textt-black">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-sm font-bold border-[1px] border-black p-1 textt-black">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xl font-bold border-[1px] border-black p-1 textt-black">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-sm font-bold border-[1px] border-black p-1 textt-black">
            MAKE A DAY TODO IS A WAY
          </div>
        </Marquee>
     
     <Routes>
      <Route path="/" element={<Login/>}></Route>
    
      <Route path="/home" element={<Home/>}></Route>
  
      
     </Routes>
    </div>
  );
}

export default App;
