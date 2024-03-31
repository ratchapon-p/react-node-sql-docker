import React, { useState } from "react";
import './Register.css'
import { useDispatch } from "react-redux";
import { userLoginAction } from "../redux/slices/auth/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { username, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await dispatch(userLoginAction({username, password}))

  };

  return (
    <div className="register-page">
      <div className="register-text">Login</div>

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
          <div className="reg-global-input-text">password</div>
          <input
            name="password"
            value={password}
            onChange={onChangeHandler}
            type="password"
            className="global-reg-input"
          />
        </div>

        <button className="register-btn">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
