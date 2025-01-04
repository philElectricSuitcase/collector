import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      <section
        className="download-section pt-100 background-img"
        style={{
          background:
            "url('assets/img/collector-dead-bg.png') no-repeat center center / cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="download-content text-white pb-100">
                <h2 className="text-white">
                But it doesn’t stop there ...
                </h2>
                <p className="lead">
               once the killer is revealed, we’ll attempt to connect with their spirit 
               <br/>and delve into the mysteries that still surround their story. 
               </p>
               <br/>
               <h2 className="text-white"> Are you ready to crack the case ? </h2>

               <p className="lead">
                 Our Next Adventure Awaits At The Bow Street Police Museum
                 <br/>
                 January 25th 2025, 28 Bow Street, London, WC2E 7AW
                </p>
                <h2 className="text-white"> Will you confront the unknown? </h2>
              <br/>

                <div className="download-btn">
                  <Link to="/" className="btn google-play-btn mr-3">
                    <span className="ti-android"></span> Get Tickets
                  </Link>
                  <Link to="/" className="btn app-store-btn">
                    <span className="ti-apple"></span> Subscribe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="download-img d-flex align-items-end">
                <img
                  src="assets/img/holding-phone.png"
                  alt="download"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
