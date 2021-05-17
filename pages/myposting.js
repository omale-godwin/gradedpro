import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RequestProhect() {
  const [state, setState] = useState({
    name: "",
    message: "",
  });

  const handleChange = (name) => (events) => {
    setState({ ...state, [name]: events.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const resp = await fetch(`/api/PHARMACEUTICAL`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        title: state.name,
        content: state.message,
      }),
    });

    const json = await resp.json();

    alert(state.name, state.message);
  }
  // useEffect(() => {
  //   handleSubmit();
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  return (
    <div className="contact-box-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="contact-form-right">
              <h2>GET IN TOUCH</h2>

              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={state.name}
                        onChange={handleChange("name")}
                        name="name"
                        placeholder="Your Name"
                        required
                        data-error="Please enter your name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        onChange={handleChange("message")}
                        value={state.message}
                        rows="4"
                        data-error="Write your message"
                        required></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="submit-button text-center">
                      <button
                        className="btn hvr-hover"
                        id="submit"
                        onClick={handleSubmit}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
