import React from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddPost from "./components/AddPost";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EditPost from "./components/EditPost";

export default function App() {
  return (
    <>
      <Router>
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createpost" element={<AddPost />} />
          <Route path="/editpost" element={<EditPost />} />
        </Routes>
      </Router>
    </>
  );
}
