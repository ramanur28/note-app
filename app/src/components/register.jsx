import { useState } from "react";
import "../style/form.css";
import { useNavigate } from "react-router-dom";
import { register } from "../api/api";
import Form from "./form";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      const reg = await register(form);
      navigate("/login");
      alert("login success you can login now");
    } catch (error) {
      alert("registration failed");
    }
  };

  return (
    <div className="form-container text-center">
      <div className="form">
        <h1 className="title text-center">Register Page</h1>
        <Form handleSubmit={handleSubmit} />
        <a href="/register" className="create-account">
          dont have account?
        </a>
      </div>
    </div>
  );
};

export default Register;
