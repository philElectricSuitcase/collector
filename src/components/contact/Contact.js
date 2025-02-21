import React from "react";

export default function Contact({ bgColor }) {
  return (
    <>
      <section
        id="contact"
        className={`contact-us ptb-100 ${bgColor ? "gray-light-bg" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3 message-box d-none">
              <div className="alert alert-danger"></div>
            </div>
            <div className="col-md-5">
           
              <div className="footer-address">
                <h6>
                  <strong>Head Office</strong>
                </h6>
              
                    <span>Phone: +4477394 168 872</span>
                 <br/>
                    <span>
                      Email :
                      <a href="mailto:social@thought-reader.co.uk">
                      social@thought-reader.co.uk
                      </a>
                    </span>
              
              </div>
            </div>
            <div className="col-md-7">
              <form
                action="#"
                method="POST"
                id="contactForm"
                className="contact-us-form"
              >
                <h5>Reach us quickly</h5>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        defaultValue=""
                        className="form-control"
                        id="phone"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company"
                        defaultValue=""
                        size="40"
                        className="form-control"
                        id="company"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="7"
                        cols="25"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className="btn solid-btn"
                      id="btnContactUs"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
