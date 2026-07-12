import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  GraduationCap,
  School,
  ShieldCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import API from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

import "../../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    schoolId: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.schoolId ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      const { token, user } = res.data;

      login(user, token);

      if (!remember) {
        localStorage.removeItem("user");
      }

      switch (user.role) {
        case "superadmin":
          navigate("/superadmin");
          break;

        case "admin":
          navigate("/admin");
          break;

        case "teacher":
          navigate("/teacher");
          break;

        case "student":
          navigate("/student");
          break;

        case "parent":
          navigate("/parent");
          break;

        default:
          navigate("/");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message || "Invalid credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-bg-circle circle-one"></div>
      <div className="login-bg-circle circle-two"></div>
      <div className="login-bg-circle circle-three"></div>

      <div className="login-wrapper">

        {/* LEFT PANEL */}

        <div className="login-left">

          <div className="brand">

            <div className="brand-logo">
              <GraduationCap size={42} />
            </div>

            <h1>School ERP</h1>

            <p>
              A complete digital platform for modern educational institutions.
            </p>

          </div>

          <div className="feature-list">

            <div className="feature-card">
              <School />
              <div>
                <h3>Student Management</h3>
                <p>
                  Admissions, profiles and academic records.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <ShieldCheck />
              <div>
                <h3>Secure Authentication</h3>
                <p>
                  Enterprise-grade login with role-based access.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <BookOpen />
              <div>
                <h3>Everything Connected</h3>
                <p>
                  Attendance, Fees, Exams, Library & Reports.
                </p>
              </div>
            </div>

          </div>

          <div className="left-footer">
            © 2026 School ERP Platform
          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="login-right">

          <form
            className="login-card"
            onSubmit={handleSubmit}
          >

            <span className="welcome-tag">
              Welcome Back 👋
            </span>

            <h2>Sign in to continue</h2>

            <p className="subtitle">
              Login to access your school dashboard.
            </p>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <div className="input-group">

              <label>School ID</label>

              <input
                type="text"
                name="schoolId"
                placeholder="Enter School ID"
                value={formData.schoolId}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div className="input-group">

              <label>Password</label>

              <div className="password-box">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  className="eye-btn"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() =>
                    setRemember(!remember)
                  }
                />

                Remember Me

              </label>

              <button
                type="button"
                className="forgot-btn"
              >
                Forgot Password?
              </button>

            </div>

            <button
              className="login-btn"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                "Signing In..."
              ) : (
                <>
                  Login
                  <ArrowRight size={18} />
                </>
              )}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;
