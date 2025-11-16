import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const { name, email, password, confirmPassword } = form;
    if (!name || !email || !password) return "All fields are required.";
    if (password !== confirmPassword) return "Passwords do not match.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const msg = validate();
    if (msg) return setError(msg);

    try {
      setLoading(true);
      const res = await API.post("/api/auth/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.errors?.[0]?.msg ||
          err.response?.data?.msg ||
          "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 shadow-lg border rounded-xl bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>

      {error && (
        <div className="bg-black text-white p-3 rounded mb-4 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={onChange}
        />

        <input
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
        />

        <input
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />

        <input
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onChange}
        />

        <button
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
