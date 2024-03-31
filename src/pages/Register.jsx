import React, { useState } from "react";
import './Register.css'
import { useDispatch } from "react-redux";

const Register = () => {

  const dispatch = useDispatch()

  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
  });

  const { username, email, password, confirmpassword, name } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password == confirmpassword) {
    } else {
      alert("error");
    }
  };

  return (
    <div className="register-page">
      <div className="register-text">Register</div>

      <form onSubmit={onSubmitHandler} className="reg-form">
        <div className="reg-global">
          <div className="reg-global-input-text">username</div>
          <input
            name="username"
            value={username}
            onChange={onChangeHandler}
            type="text"
            className="global-reg-input"
          />
        </div>

        <div className="reg-global">
          <div className="reg-global-input-text">email</div>
          <input
            name="email"
            value={email}
            onChange={onChangeHandler}
            type="email"
            className="global-reg-input"
          />
        </div>

        <div className="reg-global">
          <div className="reg-global-input-text">name</div>
          <input
            name="name"
            value={name}
            onChange={onChangeHandler}
            type="text"
            className="global-reg-input"
          />
        </div>

        <div className="reg-global">
          <div className="reg-global-input-text">password</div>
          <input
            name="password"
            value={password}
            onChange={onChangeHandler}
            type="password"
            className="global-reg-input"
          />
        </div>

        <div className="reg-global">
          <div className="reg-global-input-text">confirm password</div>
          <input
            name="confirmpassword"
            value={confirmpassword}
            onChange={onChangeHandler}
            type="password"
            className="global-reg-input"
          />
        </div>

        <button className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
