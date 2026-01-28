import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { clearAuth } from "../store/authSlice";
=======

import {
  selectUser,
  selectIsAdmin,
  selectPendingCount,
  clearAuth,
  selectRole,
  selectSavedCount,
} from "../store/authSlice";
>>>>>>> 1ea60b6 (Update services and frontend)

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

<<<<<<< HEAD
  const { user, token } = useSelector(
    (state) => state.auth
  );
=======
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectIsAdmin);
  const role = useSelector(selectRole);
  const pendingCount = useSelector(selectPendingCount);
  const savedCount = useSelector(selectSavedCount);
>>>>>>> 1ea60b6 (Update services and frontend)

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

<<<<<<< HEAD
      <div style={{ display: "flex", gap: 15 }}>
=======
      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "center",
        }}
      >
        {/* HOME */}
>>>>>>> 1ea60b6 (Update services and frontend)
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>

<<<<<<< HEAD
        <Link to="/search" style={{ color: "#fff" }}>
          Search
        </Link>

=======
        {/* 👤 CUSTOMER DASHBOARD */}
        {role === "CUSTOMER" && (
          <Link to="/customer/dashboard" style={{ color: "#fff" }}>
            Dashboard
          </Link>
        )}

        {/* 👤 CUSTOMER PROFILE */}
        {role === "CUSTOMER" && (
          <Link to="/customer/profile" style={{ color: "#fff" }}>
            Profile
          </Link>
        )}

        {/* 💾 SAVED WITH BADGE */}
        {role === "CUSTOMER" && (
          <Link
            to="/customer/saved"
            style={{
              color: "#fff",
              fontWeight: "500",
              position: "relative",
            }}
          >
            Saved

            {savedCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -14,
                  background: "#2563eb",
                  color: "white",
                  fontSize: 11,
                  padding: "2px 6px",
                  borderRadius: "50%",
                }}
              >
                {savedCount}
              </span>
            )}
          </Link>
        )}

        {/* =====================
            ADMIN LINK + BADGE
        ===================== */}
        {isAdmin && (
          <Link
            to="/admin"
            style={{
              color: "#fff",
              position: "relative",
              fontWeight: "bold",
            }}
          >
            Admin

            {pendingCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -14,
                  background: "red",
                  color: "white",
                  fontSize: 11,
                  padding: "2px 6px",
                  borderRadius: "50%",
                }}
              >
                {pendingCount}
              </span>
            )}
          </Link>
        )}

        {/* USER EMAIL */}
>>>>>>> 1ea60b6 (Update services and frontend)
        {user && (
          <span style={{ color: "#aaa" }}>
            👤 {user.email}
          </span>
        )}

<<<<<<< HEAD
        {!token ? (
=======
        {/* LOGIN / LOGOUT */}
        {!user ? (
>>>>>>> 1ea60b6 (Update services and frontend)
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
