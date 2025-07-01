import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default Private;
