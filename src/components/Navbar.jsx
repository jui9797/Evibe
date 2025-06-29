import React from "react";
import { NavLink } from "react-router-dom";
import eventlogo from "../assets/event.png";
const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/"> Events</NavLink>
      <NavLink to="/">Add Event</NavLink>
      <NavLink to="/">My Event</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-16 h-16" src={eventlogo} alt="logo" />
            <p className="hidden text-pink-500 lg:flex font-bold text-xl">
              Evibe
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <button className="btn text-white bg-blue-500 font-bold hover:bg-pink-500">
              Signup
              {/* <Link to="/signup">
                <img className="w-6 h-6" src={} alt="" />
              </Link> */}
            </button>
            <button className="btn text-white bg-blue-500 font-bold hover:bg-pink-500">
              Login
              {/* <Link to="/login">
                <MdLogin />
              </Link> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
