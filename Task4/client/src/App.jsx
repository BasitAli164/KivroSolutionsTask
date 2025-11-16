import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'

export default function App() {
  return (
    <div className="p-6">
      <nav className="mb-6 flex gap-6 text-lg font-medium">
        <Link className="hover:underline" to="/register">Register</Link>
        <Link className="hover:underline" to="/login">Login</Link>
        <Link className="hover:underline" to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<div className="text-xl">Welcome</div>} />
      </Routes>
    </div>
  );
}
