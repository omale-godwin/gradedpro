import React from "react";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-controls="navbars-rs-food"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="/">
              <img src="images/logo.png" className="logo" alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav ml-auto"
              data-in="fadeInDown"
              data-out="fadeOutUp">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="dropdown megamenu-fw">
                <a
                  href="#"
                  className="nav-link dropdown-toggle arrow"
                  data-toggle="dropdown">
                  Get Source Code
                </a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="row">
                      <div className="col-menu col-md-3">
                        <h6 className="title">
                          <a href="/andriod"> ANDRIOD & IOS</a>{" "}
                        </h6>
                      </div>

                      <div className="col-menu col-md-3">
                        <h6 className="title">
                          <a href="/webapplication"> WEB APPLICATION </a>{" "}
                        </h6>
                      </div>

                      <div className="col-menu col-md-3">
                        <h6 className="title">
                          <a href="/iot">IOT </a>{" "}
                        </h6>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">
                          <a href="/artificial_intelligent"> AI & ML</a>{" "}
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/service">
                  Our Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="hireWriter">
                  Hire A writer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="requestproject">
                  Request Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="attr-nav">
            <ul>
              <li className="search">
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
