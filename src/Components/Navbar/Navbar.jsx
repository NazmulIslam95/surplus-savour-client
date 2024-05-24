import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import LogOutButton from "../Button/LogOutButton";
import Swal from "sweetalert2";

const signOutSuccess = () =>
  Swal.fire({
    position: "center",
    icon: "success",
    title: "User SuccessFully Signed Out",
    showConfirmButton: true,
    // timer: 2000,
  });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const currentPath = location.pathname;

  // console.log(currentPath);

  const bgClassName = currentPath === "/" ? "bg-[#D6F1BC]" : "bg-white";

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "bold",
      backgroundColor: isActive ? "#ffffff00" : "",
      color: isActive ? "#36680a" : "#437318",
      border: isActive ? "solid 1px #36680a" : "black",
    };
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    signOutSuccess();
  };

  const navItems = (
    <>
      <li>
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink style={navLinkStyles} to="/AvailableFoods">
          Foods
        </NavLink>
      </li>
      <li>
        <NavLink style={navLinkStyles} to="/addFood">
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink style={navLinkStyles} to="/myFoods">
          My Foods
        </NavLink>
      </li>
      <li>
        <NavLink style={navLinkStyles} to="/myRequests">
          My Request
        </NavLink>
      </li>
      {user ? (
        <>
          <>
            <div
              ref={dropDownRef}
              className="relative mx-auto w-fit text-black"
            >
              <button onClick={() => setOpen((prev) => !prev)}>
                <img
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:blur-[2px]"
                  src={user?.photoURL || "https://i.ibb.co/jgdS5n1/profile.png"}
                  alt="avatar drop down navigate ui"
                />
              </button>
              <ul
                className={`${
                  open ? "visible duration-300" : "invisible"
                } absolute right-0 z-50`}
              >
                <li>
                  <button
                    className="hover:bg-transparent"
                    onClick={handleLogOut}
                  >
                    <LogOutButton></LogOutButton>
                  </button>
                </li>
              </ul>
            </div>
          </>
        </>
      ) : (
        <>
          <li className="text-[#437318] font-bold">
            <Link to="/logIn">Log In</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className={`navbar max-w-full mx-auto lg:z-10 ${bgClassName}`}>
      <div className="lg:navbar-start w-full lg:ml-32 ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-3xl text-[#7b9662]"
          >
            <HiMenuAlt1></HiMenuAlt1>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="ml-56 lg:ml-0">
          <Link to="/">
            <img src={logo} alt="" className="w-20 lg:w-20 " />
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex lg:mr-32">
        <ul className="menu menu-horizontal space-x-2 font-bold">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
