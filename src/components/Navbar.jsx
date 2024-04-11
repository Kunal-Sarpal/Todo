import React, { useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FcTodoList } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";

import { RxCross2 } from "react-icons/rx";


import axios from "axios";

function Navbar() {
  const [data, setData] = useState([]);
  const [state,setState] = useState(false)
  const divref = useRef();

  const check = (e) => {
    e.preventDefault();
    
    const inputValue = divref.current.value.trim(); // Accessing the value of the input field
    
    if(inputValue == ""){
        setState(false);
        alert("Empty input");
    }
    else{


        axios
        .get("http://localhost:3000/todos/find", {
            params: { title: inputValue }, // Passing the input value as a query parameter
        })
        .then(async (res) => {
            const responseData = await res.data; // Accessing the response data directly
            setState(prev=>!prev);
            setData(responseData);
        })
        .catch((Error) => alert(Error));
        divref.current.value = "";
    }
  };

  return (
    <div>
      <div className="bg-zinc-200 p-2 flex justify-between text-zinc-800 w-full shadow-black">
        <div className="flex justify-center items-center gap-2">
          <div className="block md:hidden font-bold text-xl">
            <CiMenuBurger className="font-bold" />
          </div>
          <div className="text-lg md:text-2xl font-semibold tracking-tighter font-sans">
            <div className="flex text-3xl text-blue-400">
              <FcTodoList />
              <h1 className="animate-pulse stroke-current  flex">T</h1>
              <h1 className="animate-pulse stroke-current">O</h1>
              DO
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <input
            className="bg-zinc-300 p-1 px-5 w-96 rounded-full focus:outline focus:outline-blue-500 placeholder:text-zinc-500 text-blue-500 border-[1px] border-zinc-400"
            placeholder="Search..."
            type="text"
            ref={divref}
          />
          <div className="absolute top-1 right-3 text-2xl text-zinc-500">
            <IoSearch onClick={check} />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="border-[1px] text-sm p-2 rounded-lg text-blue-400 font-normal flex justify-center items-center">
            Logout
          </div>
          <div className="border-[1px] text-sm p-2 rounded-lg text-blue-400 font-normal flex justify-center items-center">
            Login
          </div>
        </div>
      </div>
      {state ? ( <div className="absolute w-[75vw] h-screen right-0 font-bold flex p-3 gap-3 backdrop-blur-lg">
        <div className="absolute  right-10   text-3xl font-normal text-zinc-800 "> <RxCross2 onClick={()=>setState(prev=>!prev)} />
</div>
        {data.map((item, index) => (    
          <div key={index} className=" w-44 bg-zinc-300 h-44 rounded-xl p-3 border-[1px] border-black shadow-md shadow-black">
            <div className="border-[1px] m-2 p-1  border-black font-normal ">Title: {item.title}</div>
            <div className="font-normal border-[1px] m-2 p-1 border-black">Desc: {item.description}</div>
            <div className="font-bold border-[1px] m-2 p-1 border-black "> completed: {item.completed.toString()}</div>
          </div>
        ))}
      </div>):(null)}
     
    </div>
  );
}

export default Navbar;
