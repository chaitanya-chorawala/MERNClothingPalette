import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../Auth-Context/Auth-Context";

const Navbar = () => {
  const auth = useContext(authContext);

  const navigate = useNavigate();

  const LogoutHandler = () => {
    auth.logout();
    navigate("/Login");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Colthing Palette
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Registration">
              Registration
            </Link>
          </li>
          {auth.status ? (
            <button
              class="btn btn-outline-dark my-2 my-sm-0"
              onClick={LogoutHandler}
              type="button"
            >
              Logout
            </button>
          ) : (
            <li class="nav-item">
              <Link class="nav-link" to="/Login">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* {auth.status ? (
          <button
            class="btn btn-outline-dark my-2 my-sm-0"
            onClick={auth.logout}
            type="button"
          >
            Logout
          </button>
        ) : (
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            onClick={auth.login}
            type="button"
          >
            Login
          </button>
        )} */}
      </div>
    </nav>
  );
};

export default Navbar;
