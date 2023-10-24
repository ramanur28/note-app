import { useState } from "react";
import "../style/form.css";
import { login } from "../api/api";
import Form from "./form.jsx";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { login as loginState } from "../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (form) => {
    try {
      login(form);
      dispatch(loginState());
      alert("login success");
      navigate("/");
    } catch (error) {
      alert("cant login, please check your data");
    }
  };
  return (
    <div className="form-container text-center">
      <div className="form">
        <h1 className="title text-center">login Page</h1>
        <Form handleSubmit={handleSubmit} />
        <a href="/register" className="create-account">
          dont have account?
        </a>
      </div>
    </div>
  );
};

export default Login;
