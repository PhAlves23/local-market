import React, { useContext } from "react";
import { Routes, Route, redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
export default function MainRoutes() {
  const [userData, setUserData] = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
