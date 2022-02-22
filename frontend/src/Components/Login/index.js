import React, { useContext, useState } from "react";
import axios from "axios";
import authContext from "../Auth-Context/Auth-Context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const navigateHome = () => navigate("/");

  const [UserInput, setUserInput] = useState({
    Username: "",
    Password: "",
  });

  const UsernameHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        Username: e.target.value,
      };
    });
  };

  const PasswordHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        Password: e.target.value,
      };
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const res = axios
      .post(`${auth.baseURL}/Registration/Login`, {
        Username: UserInput.Username,
        Password: UserInput.Password,
      })
      .then((success) => {
        if (success.data.data !== "Invalid") {
          auth.login();
          navigateHome();
        } else alert("Invalid username or password!");
      });
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="row" style={{ padding: "20px" }}>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Username</lable>
            <input
              type="text"
              name="txtUsername"
              className="form-control"
              placeholder="*Username"
              onChange={UsernameHandler}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <lable>Password</lable>
            <input
              type="text"
              name="txtPassword"
              className="form-control"
              placeholder="*Password"
              onChange={PasswordHandler}
            />
          </div>
        </div>
        <div className="col-md-5" style={{ padding: "10px" }}>
          <div className="form-group">
            <input
              type="submit"
              name="btnLogin"
              className="btn btn-outline-success"
              value="Login"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
