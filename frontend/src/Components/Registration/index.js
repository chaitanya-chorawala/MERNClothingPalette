import React, { useContext, useState } from "react";
import axios from "axios";
import authContext from "../Auth-Context/Auth-Context";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const auth = useContext(authContext);
  const navigate = useNavigate();
  const navigateLogin = () => navigate("/Login");
  const [UserInput, setUserInput] = useState({
    Username: "",
    Password: "",
    EmailID: "",
    MobileNo: "",
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

  const EmailIDHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        EmailID: e.target.value,
      };
    });
  };

  const MobileNoHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        MobileNo: e.target.value,
      };
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(auth.baseURL);
    console.log(UserInput);

    axios
      .post(`${auth.baseURL}/Registration/Add`, {
        data: UserInput,
      })
      .then((success) => {
        // console.log(success);
        navigateLogin();
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
        <div className="col-md-5">
          <div className="form-group">
            <lable>EmailID</lable>
            <input
              type="email"
              name="txtEmailID"
              className="form-control"
              placeholder="*EmailID"
              onChange={EmailIDHandler}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <lable>MobileNo</lable>
            <input
              type="tel"
              className="form-control"
              name="txtMobileNo"
              placeholder="*MobileNo"
              onChange={MobileNoHandler}
            />
          </div>
        </div>
        <div className="col-md-5" style={{ padding: "10px" }}>
          <div className="form-group">
            <input
              type="submit"
              name="btnSave"
              className="btn btn-outline-success"
              value="Save"
            />

            <input
              type="button"
              name="btnSave"
              className="btn btn-outline-dark"
              value="Clear"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
