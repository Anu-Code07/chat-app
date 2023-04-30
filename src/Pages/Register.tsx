import React from "react";
import "../styles/register.scss";
import avatar from "../assets/upload-avt.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form>
          <span className="logo">Anurag Chat</span>
          <span className="title">Register</span>
          <input type="text" name="" id="" placeholder="Display Name.." />
          <input type="email" name="" id="" placeholder="Email.." />
          <input type="password" name="" id="" placeholder="Password.." />
          <input type="file" name="" id="avatar" style={{ display: "none" }} />
          <label htmlFor="avatar">
            <img src={avatar} alt="uplaod avatar" />
            <span>Add Profile Image</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          Already have a account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
