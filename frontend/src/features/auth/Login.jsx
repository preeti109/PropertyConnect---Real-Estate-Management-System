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
import { setAuth } from "../../store/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // 🔥 read redirect from:
  // 1) query param ?redirect=
  // 2) route state
  // 3) default /
  const redirectParam = searchParams.get("redirect");
  const redirectState = location.state?.from;

  const redirectTo =
    redirectParam || redirectState || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1️⃣ login
      const res = await loginUser({
        email,
        password,
      });

      const token = res.data;

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
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p style={{ color: "red", marginTop: 8 }}>
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
