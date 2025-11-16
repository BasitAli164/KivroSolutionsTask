import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await API.post("/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 shadow-lg border rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      {error && (
        <div className="bg-black text-white p-3 rounded mb-4 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full border p-3 rounded focus:ring-2 focus:ring-black"
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
        />

        <input
          className="w-full border p-3 rounded focus:ring-2 focus:ring-black"
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />

        <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition">
          Login
        </button>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
