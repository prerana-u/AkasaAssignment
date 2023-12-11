import React from "react";
export default function Navbar() {
  return (
    <header
      id="header"
      className="header fixed-top d-flex align-items-center mx-auto"
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ marginRight: "auto" }}
      >
        <a href="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">CovidTracker</span>
        </a>
      </div>
      {/* End Logo */}
      <div id="navbar" className="navbar" style={{ marginRight: "20px" }}>
        {sessionStorage.getItem("email") === null && (
          <ul>
            <li>
              <a className="nav-link scrollto" href="/addcase">
               <b> Add Details</b>
              </a>
            </li>
          </ul>
        )}

      
        <i className="bi bi-list mobile-nav-toggle" />
      </div>
    </header>
  );
}
