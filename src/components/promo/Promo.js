import React from "react";

const Promo = () => {
  return (
    <>
      <section className="promo-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>What is the Collector : Live ?</h2>
                <p className="lead">
                Prepare for an unforgettable 90-minute journey into the extraordinary! 
                <br/>
                This captivating show blends the art of hypnosis with magic.
                <br/>
                Step into a world of wonder and imagination, 
                where an intriguing backstory sets the stage for an experience like no other. 
                <br/>
                It’s more than a show—it’s your ticket to adventure, laughter, and awe.  
                <br/>
                Don’t just watch history come alive be a part of it. 

                
              
                </p>
              </div>
            </div>
          </div>
          <div className="row equal">
            <div className="col-md-4 col-lg-4">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                  <span className="ti-vector text-white"></span>
                </div>
                <h5>Step into the shadows </h5>
                <p>Travel to Victorian London and embark on an extraordinary hunt for a notorious serial killer. </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                  <span className="ti-lock text-white"></span>
                </div>
                <h5>Use Your Skills</h5>
                <p>
                Using a blend of magic, mindreading, comedy, hypnosis, and even your own psychic abilities, 
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                  <span className="ti-eye text-white"></span>
                </div>
                <h5>Become Immersed</h5>
                <p>
                 Together, we’ll uncover clues, examine historical evidence, and identify the culprit with startling precision. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
