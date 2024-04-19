import { useState } from "react";
import Marquee from "react-fast-marquee";
import { RxCross1 } from "react-icons/rx";

function Todo({ todos }) {
  const [handle, setHandle] = useState(false);



  function karo(id) {
    fetch(`https://todo-backend-l3vw.onrender.com/completed/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: handle }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to mark todo as completed");
        }
        // Handle successful response if needed
      })
      .catch((error) => {
        console.error("Error marking todo as completed:", error);
      });
  }

  function kar2(id) {
    alert("Deleted")
    fetch(`https://todo-backend-l3vw.onrender.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete todo");
        }
        // Handle successful response if needed
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  }

  return (
    <div className="grid grid-cols-1 border-zinc-200 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 gap-x-6 no-scrollbar  relative">
         <Marquee className="flex w-96 mt-3 gap-10 absolute top-[-4vw]">
          <div className="m-3 text-xs border-[1px] border-black p-1 tex">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xs border-[1px] border-black p-1 tex">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xs border-[1px] border-black p-1 tex">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xs border-[1px] border-black p-1 tex">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xs border-[1px] border-black p-1 tex">
            MAKE A DAY TODO IS A WAY
          </div>
          <div className="m-3 text-xs border-[1px] border-black p-1 tex">
            MAKE A DAY TODO IS A WAY
          </div>
        </Marquee>
     
      {todos.map((item, index) => (
        <div
          key={index} 
          className="shadow-sm border-[1px] border-zinc-100 shadow-zinc-400 rounded-xl h-72 w-64 flex flex-col justify-between p-3 bg-zinc-200 text-zinc-800 mb-3"
        >
          <div
            className="w-fit h-fit text-xl  cursor-pointer bg-zinc-200 hover:animate-spin mt-[-10px] p-1"
            onClick={() => kar2(item._id)}
          >
            <RxCross1 />
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
            onClick={() => karo(item._id)}
          >
            {!item.completed && !handle ? "Mark as completed" : "Completed"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
