import React from 'react'

export default function RequestProhect() {
    return (
        <div className="contact-box-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="contact-info-left">
                        <h2>CONTACT INFO</h2>
                        <ul>
                            <li>
                            <p><i className="fas fa-phone-square"></i>whatsApp: <a href="tel:+1-888705770">+234 9032196744</a></p>
                            </li>
                            <li>
                                <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+234 9032196744</a></p>
                            </li>
                            <li>
                                <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">gradedproject1@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="contact-form-right">
                        <h2>GET IN TOUCH</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" name="name" placeholder="Subject" required data-error="Please enter your Subject"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="number" className="form-control" id="subject" name="phone" placeholder="phone number" required data-error="Please enter your phone number"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="department" name="department" placeholder="department or courses of study" required data-error="Please enter your department or courses of study"/>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="submit-button text-center">
                                        <button className="btn hvr-hover" id="submit" type="submit">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}
