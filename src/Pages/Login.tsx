import React from "react";
import "../styles/login.scss";
const Login = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <form>
            <span className="logo">Anurag Chat</span>
            <span className="title">Login</span>

            <input type="email" name="" id="" placeholder="Email.." />
            <input type="password" name="" id="" placeholder="Password.." />

            <button type="submit">Sign In</button>
          </form>
          <p>
            Don't have a account? <span>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
