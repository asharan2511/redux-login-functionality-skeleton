import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { selectUser } from "../redux/userSlice";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const logoutHandler = async (e) => {
    try {
      const response = await axios.get("/logout");
      console.log(response);
      dispatch(logout());
      alert(response.data.message);
      navigate("/");
    } catch (error) {}
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome to Logout page</h1>
      {user ? <button onClick={logoutHandler}>Logout</button> : null}
    </div>
  );
};

export default Logout;
