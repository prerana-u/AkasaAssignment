import React from "react";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddCases from "./components/AddCases";

export default function App() {
  return (
    <>
      <Router>
        <div className="container"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcase" element={<AddCases />} />

        </Routes>
      </Router>
    </>
  );
}
