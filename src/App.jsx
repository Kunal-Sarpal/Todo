import{ useEffect, useState } from "react";
import CreatedTodo from "./components/CreatedTodo";
import Todo from "./components/Todo";
// import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./components/Navbar";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
 
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.alltodo);
        setLoading(false);
      })
        
 // Empty dependency array to ensure the effect runs only once

  return (
    <div className="fixed overflow-y-scroll no-scrollbar w-full overflow-hidden">
    <Navbar />
    <div className="grid grid-cols-12 w-full   bg-zinc-300 no-scrollbar">
      <CreatedTodo />
      <div className=" p-12 md:col-span-9 xl:col-span-9 xl:overflow-scroll max-h-screen w-full overflow-scroll col-span-full flex justify-center ">
        {loading ? (
        <div className="w-full h-[51vw] flex justify-center items-center animate-bounce" >
          <div className="w-8 h-8 rounded-md  border-2  animate-bounce duration-500 ease-in-out transition-all   border-black translate-x-8"></div>
          <div className="w-8 h-8 rounded-full border-2 border-b-black border-zinc-200 animate-pulse  "></div>
         
          <div className="w-8 h-8 rounded-md border-2 border-zinc-900 animate-bounce"></div>
        </div>
      ):(<Todo todos={todos}/>)}
        

      </div>
    </div>
    
    </div>
  );
}

export default App;
