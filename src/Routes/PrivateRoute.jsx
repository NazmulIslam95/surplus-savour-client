import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/logIn"></Navigate>;
};

export default PrivateRoute;
