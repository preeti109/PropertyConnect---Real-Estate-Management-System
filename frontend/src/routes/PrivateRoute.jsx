import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to={`/auth/login?redirect=${location.pathname}`}
        replace
      />
    );
  }

  return children;
}
