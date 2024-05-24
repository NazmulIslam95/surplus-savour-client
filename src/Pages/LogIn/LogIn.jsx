import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "react-awesome-button/dist/styles.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const loginSuccess = () =>
  Swal.fire({
    position: "center",
    icon: "success",
    title: "User SuccessFully Logged In",
    showConfirmButton: false,
    timer: 2000,
  });

const signUpSuccess = () =>
  Swal.fire({
    position: "center",
    icon: "success",
    title: "User SuccessFully Logged In",
    showConfirmButton: false,
    timer: 2000,
  });

const LogIn = () => {
  const [register, setRegister] = useState(false);

  const { createUser, signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location in the login page", location);

  // const from = location?.state ? location?.state : "/";

  // ----------------handleLogin start
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location?.state : "/");
        loginSuccess();
      })
      .catch((error) => console.log(error));
  };
  // ----------------handleLogin end

  // ----------------handleSignUp
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(displayName, email, photoURL, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location?.state : "/");
        signUpSuccess();
      })
      .catch((error) => console.log(error));
  };
  // ----------------handleSignUp end

  // ------------------handleSignInWithGoogle start

  const handleGoogleSignUp = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      navigate(location?.state ? location?.state : "/");
      loginSuccess();
    });
  };

  // ------------------handleSignInWithGoogle ends

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="w-80 md:w-96 lg:w-[1000px] max-h-svh mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
        {/* register form  */}
        <div
          className={`p-8 w-full ${
            register
              ? "lg:translate-x-0"
              : "lg:-translate-x-full hidden lg:block"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4 text-center mt-6">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp} className="space-y-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="name"
              name="displayName"
              placeholder="John Doe"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-lime-400"
            />
            <label htmlFor="u_email" className="block">
              Email
            </label>
            <input
              id="u_email"
              type="email"
              name="email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-lime-400"
            />
            <label htmlFor="u_email" className="block">
              Photo Url
            </label>
            <input
              id="img"
              type="text"
              name="photoURL"
              placeholder="Your Photo Url"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-lime-400"
            />
            <label htmlFor="u_password" className="block">
              Password
            </label>
            <input
              id="u_password"
              type="password"
              name="password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-lime-400"
            />
            <Button className="w-full h-10" variant="contained" color="success">
              <input type="submit" value="Sign Up" />
            </Button>
          </form>
          <br />

          <p className=" text-center">
            Already have an account?<span className="text-white">_</span>
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Login
            </Link>
          </p>
          <hr className="my-4" />
          <Button className="w-full h-10" variant="outlined" color="success">
            <div className="text-2xl mr-2">
              <FcGoogle></FcGoogle>
            </div>
            Continue with Google
          </Button>
        </div>
        {/* img */}
        <div
          className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${
            register
              ? "translate-x-full rounded-bl-full duration-500"
              : "rounded-br-full"
          }`}
        >
          <img
            src="https://www.theodysseyonline.com/media-library/image.jpg?id=14179375&width=764&quality=80"
            className="object-cover h-full"
            alt="img"
          />
        </div>
        {/* login form */}
        <div
          className={`p-8 w-full mr-0 ml-auto duration-500 ${
            register ? "lg:translate-x-full hidden lg:block" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
          <form onSubmit={handleLogin} className="my-8 space-y-5">
            <label htmlFor="_email" className="block">
              Email
            </label>
            <input
              id="_email"
              type="email"
              name="email"
              placeholder="example@example.com"
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-lime-400"
            />
            <label htmlFor="_password" className="block">
              Password
            </label>
            <input
              id="_password"
              type="password"
              name="password"
              placeholder=".............."
              min={5}
              className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-lime-400"
            />

            <Button className="w-full h-10" variant="contained" color="success">
              <input type="submit" value="Login" />
            </Button>
          </form>
          {/* button type will be submit for handling form submission*/}
          <p className="my-3 text-center">
            Do not have an account?<span className="text-white">_</span>
            <Link
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Register
            </Link>
          </p>
          <hr className="mb-8" />
          <Button
            onClick={handleGoogleSignUp}
            className="w-full h-10"
            variant="outlined"
            color="success"
          >
            <div className="text-2xl mr-2">
              <FcGoogle></FcGoogle>
            </div>
            Continue with Google
          </Button>
        </div>
      </div>
      <Helmet>
        <title>Surplus Savour | Login</title>
      </Helmet>
    </div>
  );
};

export default LogIn;
