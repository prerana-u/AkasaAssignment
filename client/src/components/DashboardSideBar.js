import React from "react";
import { HashLink } from 'react-router-hash-link';
// import axios from "axios";

export default function DashboardSideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <i className="bi bi-house" />
            <span>Home Page</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="/dashboard">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
        <HashLink to="/#posts" className="nav-link collapsed"><i class="bi bi-postcard-heart-fill"></i>  View All Posts</HashLink>
        </li>
        
     
        <li className="nav-item">
          <a className="nav-link collapsed" href="/createpost">
            <i className="bi bi-person-add" />
            <span>Create Post</span>
          </a>
        </li>
    
      </ul>
    </aside>
  );
}
