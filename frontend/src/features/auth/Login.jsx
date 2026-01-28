import { useState } from "react";
import {
  useNavigate,
  useLocation,
  Link,
  useSearchParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../api/authApi";
import { getMyProfile } from "../../api/userApi";
<<<<<<< HEAD
import { setAuth } from "../../store/authSlice";
=======
import { getSavedProperties } from "../../api/cartApi";

import {
  setAuth,
  setSavedCount,
} from "../../store/authSlice";

import { jwtDecode } from "jwt-decode";
>>>>>>> 1ea60b6 (Update services and frontend)

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

<<<<<<< HEAD
  // 🔥 read redirect from:
  // 1) query param ?redirect=
  // 2) route state
  // 3) default /
  const redirectParam = searchParams.get("redirect");
  const redirectState = location.state?.from;

  const redirectTo =
    redirectParam || redirectState || "/";

=======
  // redirect sources
  const redirectParam = searchParams.get("redirect");
  const redirectState = location.state?.from;

>>>>>>> 1ea60b6 (Update services and frontend)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
<<<<<<< HEAD
      // 1️⃣ login
=======
      /* ======================
         1️⃣ LOGIN
      ====================== */
>>>>>>> 1ea60b6 (Update services and frontend)
      const res = await loginUser({
        email,
        password,
      });

      const token = res.data;

<<<<<<< HEAD
      // 2️⃣ save token
      localStorage.setItem("token", token);

      // 3️⃣ fetch profile
      const profileRes = await getMyProfile();

      // 4️⃣ save redux
      dispatch(
        setAuth({
          token,
          user: profileRes.data,
        })
      );

      // 5️⃣ redirect back
      navigate(redirectTo, { replace: true });
=======
      /* ======================
         🔥 SAVE TOKEN FIRST
      ====================== */
      localStorage.setItem("token", token);

      /* ======================
         2️⃣ DECODE JWT
      ====================== */
      const decoded = jwtDecode(token);

      const role =
        decoded.role ||
        decoded.userRole ||
        decoded.authorities;

      const userId =
        decoded.userId ||
        decoded.id ||
        decoded.sub;

      /* ======================
         3️⃣ FETCH PROFILE
      ====================== */
      const profileRes = await getMyProfile();

      /* ======================
         4️⃣ SAVE REDUX
      ====================== */
      dispatch(
        setAuth({
          token,
          user: {
            ...profileRes.data,
            id: userId,
            role,
          },
        })
      );

      /* ======================
         5️⃣ CART BADGE SYNC
      ====================== */
      if (role === "CUSTOMER") {
        try {
          const cartRes = await getSavedProperties();

          dispatch(
            setSavedCount(
              cartRes.data.items?.length || 0
            )
          );
        } catch (err) {
          console.warn(
            "Cart fetch failed after login"
          );
          dispatch(setSavedCount(0));
        }
      }

      /* ======================
         6️⃣ REDIRECT
      ====================== */
      const defaultRedirect =
        role === "ADMIN" ? "/admin" : "/";

      const redirectTo =
        redirectParam ||
        redirectState ||
        defaultRedirect;

      navigate(redirectTo, { replace: true });

>>>>>>> 1ea60b6 (Update services and frontend)
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
<<<<<<< HEAD
          onChange={(e) => setEmail(e.target.value)}
=======
          onChange={(e) =>
            setEmail(e.target.value)
          }
>>>>>>> 1ea60b6 (Update services and frontend)
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
<<<<<<< HEAD
          onChange={(e) => setPassword(e.target.value)}
=======
          onChange={(e) =>
            setPassword(e.target.value)
          }
>>>>>>> 1ea60b6 (Update services and frontend)
        />

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
<<<<<<< HEAD
          <p style={{ color: "red", marginTop: 8 }}>
=======
          <p
            style={{
              color: "red",
              marginTop: 8,
            }}
          >
>>>>>>> 1ea60b6 (Update services and frontend)
            {error}
          </p>
        )}
      </form>

      {/* SIGN UP LINK */}
      <p style={{ marginTop: 10 }}>
        New user?{" "}
        <Link to="/auth/register">
          Sign up
        </Link>
      </p>
    </div>
  );
}
