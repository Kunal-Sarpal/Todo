import React, { useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FcTodoList } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";


import axios from "axios";
import { Link } from "react-router-dom";

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
        .get("https://todo-backend-l3vw.onrender.com/todos/find", {
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
  // function loginHandler(){
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const navigate = useNavigate();
  //   navigate("/login");
  //   alert("Hello")
    
  // }

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
            <button><Link to={"/login"}>Logout</Link></button>
          </div>
        </div>
      </div>
      {state ? ( <div className="absolute w-[75vw] h-screen right-0 font-bold flex p-3 gap-3 backdrop-blur-lg">
        <div className="absolute  right-1 hover:scale-150 duration-200  text-5xl font-light text-zinc-800 "> <RxCross2 onClick={()=>setState(prev=>!prev)} />
</div>
        {data.map((item, index) => (    
          <div
          key={index}
          className="shadow-sm border-[1px] border-zinc-100 shadow-zinc-400 rounded-xl h-72 w-64 flex flex-col justify-between p-3 bg-zinc-200 text-zinc-800 mb-3"
        > 
        
          <div
            className="w-fit h-fit text-xl bg-zinc-200  mt-[-10px] p-1 cursor-not-allowed"
            
          >
            <RxCross1 className="hidden " />
          </div>
          <div className=" mt-[-65%]">
            <div className="flex justify-center font-light text-3xl px-2 py-1 border-b-2 border-zinc-500 ">
              {item.title}
            </div>
            <div className="font-semibold text-md bg-red-100">
              🎯 {item.description}
            </div>
          </div>
          <button
            className={`${
              item.completed ? "bg-green-400" : "bg-orange-400"
            } text-white p-2 rounded-md shadow shadow-zinc-500 focus:outline outline-blue-400`}
            
          >
            {!item.completed ? "Mark as completed" : "Completed"}
          </button>
        </div>
        ))}
      </div>):(null)}
     
    </div>
  );
}

export default Navbar;
