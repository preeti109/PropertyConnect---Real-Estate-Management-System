import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuth } from "../store/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, token } = useSelector(
    (state) => state.auth
  );

  const handleLogout = () => {
    dispatch(clearAuth());
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#222",
        color: "#fff",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🏠 RealEstate</h2>

      <div style={{ display: "flex", gap: 15 }}>
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>

        <Link to="/search" style={{ color: "#fff" }}>
          Search
        </Link>

        {user && (
          <span style={{ color: "#aaa" }}>
            👤 {user.email}
          </span>
        )}

        {!token ? (
          <Link to="/auth/login" style={{ color: "#fff" }}>
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              border: "1px solid white",
              color: "white",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
