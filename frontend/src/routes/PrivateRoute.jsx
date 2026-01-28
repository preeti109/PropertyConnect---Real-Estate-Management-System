import { Navigate, useLocation } from "react-router-dom";
<<<<<<< HEAD
=======
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../store/authSlice";
>>>>>>> 1ea60b6 (Update services and frontend)

export default function PrivateRoute({ children }) {
  const location = useLocation();

<<<<<<< HEAD
  const token = localStorage.getItem("token");

  if (!token) {
=======
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
>>>>>>> 1ea60b6 (Update services and frontend)
    return (
      <Navigate
        to={`/auth/login?redirect=${location.pathname}`}
        replace
      />
    );
  }

  return children;
}
