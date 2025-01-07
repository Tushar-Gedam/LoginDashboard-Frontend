import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Assuming this is the shared CSS file for form styling.

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    operation: "", // Custom field (optional)
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.operation) {
      alert("Please select an operation");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/register", formData); // Registration API
      navigate("/login"); // Navigate to the login page after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="container login-container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label>Select Operation (optional)</label>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="operation"
                        value="addition"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Addition</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="operation"
                        value="subtraction"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Subtraction</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="operation"
                        value="multiplication"
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label">Multiplication</label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={() => navigate("/login")}
                  >
                    Already have an account? Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
