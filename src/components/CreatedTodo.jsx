import { useEffect, useState } from "react";
import Notification from "../components/Notification";

function CreatedTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [res,setRes] = useState(false);


useEffect(()=>{



},[])
  async function takedata() {
    try {
      const res = await fetch('https://todo-backend-l3vw.onrender.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          description: description
        }),
        headers: { 'Content-Type': 'application/json'}
      });

      if (res.ok) {
        alert('Todo was created successfully');
        setTitle("");
        setDescription("");
      } else {
        // Handle non-200 response
        alert("Invalid Credentials");
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      // Handle network error
      alert('Network error: ' + error.message);
    }
  }

  return (
    <div className="hidden  md:flex flex-col h-[94vh]  bg-zinc-200  col-span-3 w-full ">
        <input type="text" className=" border-[1px] border-zinc-400 outline-blue-700  p-3 text-lg m-2 rounded-sm text-blue-400 font-normal" placeholder="➕ ex. Study"   value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea type="text" className="border-[1px] border-zinc-400  outline-blue-700 p-3 text-lg m-2 h-44 rounded-sm text-md font-normal text-blue-400"   value={description}placeholder="➕ ex. I will Study on monday.." onChange={(e) => setDescription(e.target.value)} />

        <Notification/>
        <button className=" mt-auto bg-blue-700 p-3 rounded-lg m-2 text-xl font-normal text-white hover:bg-blue-600 " onClick={takedata}>Create</button>

    </div>
  );
}

export default CreatedTodo;
