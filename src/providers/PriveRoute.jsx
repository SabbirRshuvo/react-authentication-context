/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate } from "react-router";

const PriveRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }

  return (
    <div>
      <Navigate to="/login"></Navigate>
      <Navigate to="/profile"></Navigate>
    </div>
  );
};

export default PriveRoute;
