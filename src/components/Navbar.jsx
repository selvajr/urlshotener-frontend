import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import { toast } from "react-toastify";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [showToggle, setShowToggle] = useState(false);

  const handleLogout = () => {
    userServices
      .logout()
      .then((response) => {
        toast.success(response.data.message);
        navigate("/")
      })
      .catch((error) => {
        toast.error("Logout failed");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
      <div className="container-fluid px-0">
        <Link className="navbar-brand font-weight-bolder ms-sm-3">
          URL Shortener
        </Link>
        {user ? (
          <Link
            onClick={handleLogout}
            className="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block"
          >
            LOG OUT
          </Link>
        ) : (
          <span>
            {" "}
            <Link
              className="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block"
              to={"/login"}
            >
              LOG IN
            </Link>
          </span>
        )}
        <button
          className="navbar-toggler shadow-none ms-md-2 collapsed"
          aria-expanded={showToggle}
          onClick={() => {
            setShowToggle(!showToggle);
          }}
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div
          className={
            showToggle
              ? "navbar-collapse w-100 pt-3 pb-2 py-lg-0 collapse show"
              : "navbar-collapse w-100 pt-3 pb-2 py-lg-0 collapse"
          }
          id="navigation"
        >
          <ul className="navbar-nav navbar-nav-hover mx-auto">
            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link to={"/dashboard/viewurl"} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
            view url
              </Link>
            </li>
            <li className="nav-item dropdown dropdown-hover mx-2">
              <Link to={"/dashboard/createurl"} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
            Create url
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav d-lg-block d-none">
            <li className="nav-item">
              {user ? (
                <Link
                  onClick={handleLogout}
                  className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
                >
                  LOG OUT
                </Link>
              ) : (
                <span>
                  {" "}
                  <Link
                    className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
                    to={"/login"}
                  >
                    LOG IN
                  </Link>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
