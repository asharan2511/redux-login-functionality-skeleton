import React, { useState } from "react";
import axios from "axios";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      dispatch(login(response.data));
      alert(response.data.message);
      navigate("/logout");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <h1>welcome to the login page</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login </button>
      </form>
    </div>
  );
};

export default Login;
