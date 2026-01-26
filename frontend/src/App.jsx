import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AppRoutes from "./routes/AppRoutes";
import {
  setUser,
  clearAuth,
} from "./store/authSlice";
import { getMyProfile } from "./api/userApi";

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(
    (state) => state.auth.token
  );

  useEffect(() => {
    const loadUser = async () => {
      if (!token) return;

      try {
        const res = await getMyProfile();

        dispatch(setUser(res.data));
      } catch (err) {
        console.error("AUTO LOGIN FAILED", err);
        dispatch(clearAuth());
      }
    };

    loadUser();
  }, [token, dispatch]);

  return <AppRoutes />;
}
