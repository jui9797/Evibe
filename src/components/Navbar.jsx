import { useContext, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import eventlogo from "../assets/event.png";
import { MdLogin } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "./Spinner";
const Navbar = () => {
  const { user, loading, handleLogout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/event"> Events</NavLink>
      <NavLink to="/addEvent">Add Event</NavLink>
      <NavLink to="/MyEvent">My Event</NavLink>
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
            {loading ? (
              <>
                <Spinner></Spinner>
              </>
            ) : (
              <>
                {user ? (
                  <>
                    <div className="relative inline-block">
                      {/* Profile Image */}
                      <img
                        src={user?.photoURL}
                        alt="user-photo"
                        className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() =>
                          setTimeout(() => setOpen(false), 3000)
                        }
                      />

                      {/* Dropdown */}
                      {open && (
                        <div
                          onMouseEnter={() => setOpen(true)}
                          onMouseLeave={() => setOpen(false)}
                          className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50"
                        >
                          <div className="px-4 py-2 text-gray-800 font-medium border-b">
                            {user?.name}
                          </div>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-500"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <button className="btn text-white bg-blue-500 font-bold hover:bg-pink-500">
                      <Link to="/register">Sign Up</Link>
                    </button>
                    <button className="btn text-white bg-blue-500 font-bold hover:bg-pink-500">
                      <Link to="/login">
                        <MdLogin />
                      </Link>
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
