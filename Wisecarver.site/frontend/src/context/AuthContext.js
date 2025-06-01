/**
 * AuthContext.jsx
 * React Context for managing authentication state with JWT tokens.
 * Persists token in localStorage to maintain state on page refresh.
 * Handles login, registration, and logout with axios API calls.
 * Includes LiFi-specific role-based access control.
 */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/auth";
  const navigate = useNavigate();

  // Initialize state from localStorage
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken || null);
  const [user, setUser] = useState(null);
  const [isServerError, setIsServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync user state when token changes
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        // Check token expiration
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          logoutUser("Session expired. Please log in again.");
          return;
        }
        setUser({
          username: decoded.username,
          id: decoded.user_id,
          first_name: decoded.first_name,
          role: decoded.role || "user", // LiFi-specific: role-based access
        });
      } catch (error) {
        console.error("Invalid token:", error);
        logoutUser("Invalid token. Please log in again.");
      }
    } else {
      setUser(null);
    }
  }, [token]);

  const registerUser = async (registerData) => {
    try {
      const finalData = {
        username: registerData.username,
        password: registerData.password,
        email: registerData.email,
        first_name: registerData.firstName,
        last_name: registerData.lastName,
      };
      const response = await axios.post(`${BASE_URL}/register/`, finalData);
      if (response.status === 201) {
        setIsServerError(false);
        setErrorMessage("");
        navigate("/login");
        return { success: true };
      }
    } catch (error) {
      setIsServerError(true);
      setErrorMessage(error.response?.data?.detail || "Registration failed");
      navigate("/register");
      return { success: false, error: error.response?.data };
    }
  };

  const loginUser = async (loginData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login/`, loginData);
      if (response.status === 200) {
        const newToken = response.data.access;
        localStorage.setItem("token", newToken);
        setToken(newToken);
        setIsServerError(false);
        setErrorMessage("");
        navigate("/");
        return { success: true };
      }
    } catch (error) {
      setIsServerError(true);
      setErrorMessage(error.response?.data?.detail || "Login failed");
      navigate("/login"); // Stay on login page to retry
      return { success: false, error: error.response?.data };
    }
  };

  const logoutUser = (message = "") => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsServerError(!!message);
    setErrorMessage(message);
    navigate("/");
  };

  // LiFi-specific: Check if user is admin
  const isAdmin = () => user?.role === "admin";

  const contextData = {
    user,
    token,
    loginUser,
    logoutUser,
    registerUser,
    isServerError,
    errorMessage,
    isAdmin, // LiFi-specific: Expose admin check
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};