// client/src/App.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import api, { setAuthToken } from "./utils/api";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import app from "./App.css";
function App() {
  // Persist token header across reloads
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        {/* 404 handler */}
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
