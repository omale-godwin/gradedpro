import React from 'react'

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
                                    <i className="fab fa-opencart"></i> Artificial intelligent 
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> machine learning
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> andriod and ios application
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> final year project for all department
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> thesis and dissertation for all department or courses
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> 50% - 80% off on Fashion
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT20
                                </li>
                                <li>
                                    <i className="fab fa-opencart"></i> Off 50%! Shop Now
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
               
                    <div className="right-phone-box">
                        <p>Call US :- <a href="#">+234 903216744</a></p>
                    </div>
                    <div className="our-link">
                        <ul>
                        <li className="dropdown">
                            <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">My Account</a>
                            <ul className="dropdown-menu bg-dark">
                                <li><a href="login">Login</a></li>
                                <li><a href="/register">Register</a></li>
                                 <li><a href="/logout">Logout</a></li>
                            </ul>
                            </li>
                            <li><a href="/source">Source Code</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
