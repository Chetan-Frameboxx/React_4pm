import React from "react";
import { Outlet, Link } from "react-router";

export default function App() {
  return (
    <div>
      <nav className="d-flex justify-content-around">
        <Link to="/dashboard">Dashboard</Link> |
        <Link to="/login">Login</Link>
        <Link to="/user">User</Link>
      </nav>
      <Outlet />
    </div>
  );
}