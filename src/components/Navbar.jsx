import React, { useState } from "react";
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
  const [state, setState] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const check = (e) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim(); // Trim the input value
    if (trimmedValue === "") {
      setState(false);
      alert("Empty input");
    } else {
      axios
        .get("https://todo-backend-l3vw.onrender.com/find", {
          data: { title: trimmedValue },
          withCredentials: true, // Pass the trimmed value as a query parameter
        })
        .then(async (res) => {
          const responseData = await res.data;
          setState((prev) => !prev);
          setData(responseData);
        })
        .catch((error) => alert(error));
      setInputValue(""); // Clear the input value after the request
    }
  };

  return (
    <div>
      <div className="bg-zinc-200 p-2 flex justify-between text-zinc-800 w-full shadow-black">
        {/* Other content */}
        <div className="hidden md:block relative">
          <input
            className="bg-zinc-300 p-1 px-5 w-96 rounded-full focus:outline focus:outline-blue-500 placeholder:text-zinc-500 text-blue-500 border-[1px] border-zinc-400"
            placeholder="Search..."
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="absolute top-1 right-3 text-2xl text-zinc-500">
            <IoSearch onClick={check} />
          </div>
        </div>
        {/* Other content */}
      </div>
      {/* Other content */}
    </div>
  );
}

export default Navbar;
