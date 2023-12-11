import React from "react";
import { useNavigate } from "react-router-dom";


export default function DashboardNavBar() {
  const navigate = useNavigate();


  const logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userid");
    sessionStorage.clear();
    navigate("/login");
  };


  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">CovidTracker</span>
          </a>
        
        </div>
    
       

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item">
              
              
                  <a
                    className="dropdown-item d-flex align-items-center"
                    style={{marginRight:"20px", color:'#012970'}}
                    onClick={logout}
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span> Sign Out </span>
                  </a>
                
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
