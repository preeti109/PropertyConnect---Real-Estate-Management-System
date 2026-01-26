import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import PropertyList from "../features/property/PropertyList";
import PropertyDetails from "../features/property/PropertyDetails";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<PropertyList />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        {/* PROTECTED */}
        <Route
          path="/properties/:id"
          element={
            <PrivateRoute>
              <PropertyDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
}
