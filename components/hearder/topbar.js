import React from "react";

export default function Topbar() {
  return (
    <div className="main-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-slid-box">
              <div id="offer-box" className="carouselTicker">
                <ul className="offer-box">
                  <li>
                    <i className="fab fa-opencart"></i> gradedproject1@gmail.com
                  </li>

                  <li>
                    <i className="fab fa-opencart"></i> +2347064115889
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="our-link">
              <ul>
                <li className="dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle arrow"
                    data-toggle="dropdown">
                    My Account
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li>
                      <a href="login">Login</a>
                    </li>
                    <li>
                      <a href="/register">Register</a>
                    </li>
                    <li>
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/source">Source Code</a>
                </li>
                <div className="right-phone-box">
                  <p>
                    Call US :- <a href="#">+234 7064115889</a>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
