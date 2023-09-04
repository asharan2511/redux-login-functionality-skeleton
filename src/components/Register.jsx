import React, { useState } from "react";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });
      console.log(response);
      if (dispatch(setUser(response.data))) {
        alert(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <h1>Enter your details</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter passwrod"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
