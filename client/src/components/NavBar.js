// client/src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/login">Login</Link> | <Link to="/register">Register</Link> |{" "}
      <Link to="/chat">Chat</Link>
    </nav>
  );
}
