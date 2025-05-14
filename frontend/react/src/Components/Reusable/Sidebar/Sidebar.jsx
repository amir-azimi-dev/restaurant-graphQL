import React from "react";
import toggleTheme from "../../../Utils/functions/themeToggle";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav>
      <div className="logo-name">
        <div className="logo-image">
          <img src="images/logo.png" alt="" />
        </div>

        <span className="logo_name">CodingLab</span>
      </div>
      <div className="menu-items">
        <ul className="nav-links">
          <li>
            <Link to="/dashboard/">
              <i className="uil uil-estate"></i>
              <span className="link-name">Dahsboard</span>
            </Link>
          </li>
          <li className="active-tab">
            <Link to="/dashboard/foods">
              <i className="uil uil-files-landscapes"></i>
              <span className="link-name">Foods</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users">
              <i className="uil uil-user"></i>
              <span className="link-name">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders">
              <i className="uil uil-shopping-bag"></i>
              <span className="link-name">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className="uil uil-chart"></i>
              <span className="link-name">Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className="uil uil-thumbs-up"></i>
              <span className="link-name">Like</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className="uil uil-comments"></i>
              <span className="link-name">Comment</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <i className="uil uil-share"></i>
              <span className="link-name">Share</span>
            </Link>
          </li>
        </ul>

        <ul className="logout-mode">
          <li>
            <Link to="/dashboard">
              <i className="uil uil-signout"></i>
              <span className="link-name">Logout</span>
            </Link>
          </li>

          <li onClick={toggleTheme} className="mode">
            <button>
              <i className="uil uil-moon"></i>
              <span className="link-name">Dark Mode</span>
            </button>

            <div className="mode-toggle">
              <span className="switch"></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
