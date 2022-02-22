import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import authContext from "./Components/Auth-Context/Auth-Context";
import "./bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import AdminProduct from "./Components/AdminProduct";
import AdminRegistration from "./Components/AdminRegistration";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import ProductForm from "./Components/AdminProduct/ProductForm";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const baseURL = "http://localhost:5000";

  const setLogin = () => {
    setAuthStatus(true);
  };

  const setLogout = () => {
    setAuthStatus(false);
  };

  return (
    <Router>
      <div className="App">
        <authContext.Provider
          value={{
            status: authStatus,
            login: setLogin,
            logout: setLogout,
            baseURL: baseURL,
          }}
        >
          <Navbar></Navbar>
          {console.log(authStatus)}
          <Routes>
            {/* Admin */}
            <Route
              path="/Admin/Product"
              exact
              element={<AdminProduct></AdminProduct>}
            ></Route>
            <Route
              path="/Admin/Product/Add"
              exact
              element={<ProductForm></ProductForm>}
            ></Route>
            <Route
              path="/Admin/ViewRegistration"
              exact
              element={<AdminRegistration></AdminRegistration>}
            ></Route>

            {/* Client */}
            <Route path="/" exact element={<Home></Home>}></Route>
            <Route
              path="/Registration"
              exact
              element={<Registration></Registration>}
            ></Route>
            <Route path="/Login" exact element={<Login></Login>}></Route>
          </Routes>
        </authContext.Provider>
      </div>
    </Router>
  );
}

export default App;
