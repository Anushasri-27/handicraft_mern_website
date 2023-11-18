import React from "react";
import "../styles/login.css"
const Login = () => {
  return (
    <div className="login-wrap">
      <div className="login-box">
        <h2>Login</h2>
        <form action="">
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" />
            <label htmlFor="">Password</label>
          </div>
          <a href="">
            <span />
            <span />
            <span />
            <span />
            submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
