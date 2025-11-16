import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/api/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border shadow-lg rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="text-lg">
            <strong>Welcome,</strong> {user.name}
          </p>
          <p className="mt-1 text-gray-600">{user.email}</p>
          <p className="mt-1 text-sm text-gray-500">
            Joined: {new Date(user.createdAt).toLocaleString()}
          </p>
        </>
      )}

      <button
        onClick={logout}
        className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
      >
        Logout
      </button>
    </div>
  );
}
