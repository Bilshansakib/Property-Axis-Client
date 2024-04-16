import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthOfContext } from "../../Providers/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthOfContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/updateProfile">update Profile</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/register">Create Profile</NavLink>
        </li>
      )}
      {/* <li>
        <NavLink to="/login">Home</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="h-14 bg-gradient-to-r from-violet-500 to-blue-500 px-4 sm:px-8 navbar  shadow-lg fixed z-10 ">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-400 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Property Axis</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <span>
              <img
                className="w-10 rounded-full"
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </span>
            <button onClick={handleSignOut} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
