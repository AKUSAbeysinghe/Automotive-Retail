import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost/Automative_DB/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Login successful! Redirecting...");
        
        // Save user data
        localStorage.setItem("user", JSON.stringify(data.user));

        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
        setMessage("❌ " + (data.message || "Invalid credentials"));
      }
    } catch (err) {
      setMessage("❌ Something went wrong! Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121416] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
              <span className="text-black font-black text-3xl">M</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white">Motorhaus</h1>
          </div>
          <p className="text-neutral-400 uppercase tracking-[2px] text-sm">Admin Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-neutral-900 rounded-3xl border border-neutral-700 p-10 shadow-2xl">
          <h2 className="text-4xl font-black text-white text-center mb-10 tracking-tight">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-neutral-400 text-sm mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="admin@sennelier.lk"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-700 focus:border-orange-500 rounded-2xl px-6 py-5 text-white placeholder-neutral-500 focus:outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-neutral-400 text-sm mb-3">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-700 focus:border-orange-500 rounded-2xl px-6 py-5 text-white placeholder-neutral-500 focus:outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-700 text-black font-bold py-5 rounded-2xl text-lg transition-all duration-300 mt-2"
            >
              {loading ? "LOGGING IN..." : "LOG IN"}
            </button>
          </form>

          {message && (
            <p
              className={`text-center mt-6 text-sm font-medium ${
                message.includes("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          <div className="text-center mt-8">
            <p className="text-neutral-500 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-orange-500 hover:underline font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-neutral-500 text-xs mt-10">
          © 2026 Motorhaus
        </p>
      </div>
    </div>
  );
};

export default Login;