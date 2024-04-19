import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginForm(e) {
    e.preventDefault();
    if(email === "" || password === ""){
      alert("Invalid inputs");
    }
    else{


      axios.post("http://localhost:3000/login", { email, password })
        .then(response => {
          // Handle successful login, such as storing token in local storage
          console.log("Login successful");
          navigate("/home");
        })
        .catch(error => {
          // Handle login error
          console.error("Login failed:", error);
        });
    }
    // Send email and password to your backend for authentication
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-200">
      <div className="border-2 p-3 w-60 h-72 shadow bg-white ">
        <form onSubmit={loginForm}>
          <div className="flex gap-2 mb-3">
            <button className="p-2 border-b-2 border-zinc-300">Login</button>
            <button className="p-2 border-b-2 border-zinc-500">SignUp</button>
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] p-3 focus:outline-2 outline-blue-500 focus:border-none m-1 border-zinc-500 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-[1px] p-3 focus:outline-2 outline-blue-500 focus:border-none m-1 border-zinc-500 rounded-md"
            placeholder="Password"
          />
          <input
            type="submit"
            value={"Submit"}
            className="mt-10 bg-blue-700 text-white p-2 px-3 rounded-md font-medium w-full flex justify-center"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
