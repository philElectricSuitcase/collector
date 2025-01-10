import React from "react";

export default function Accordion({ Title }) {
  return (
    <>
      <section className={`container accordions ${Title ? "ptb-100" : ""}`}>
        {Title ? (
          <div className="row">
            <div className="col-lg-8 col-md-9">
              <div className="section-heading mb-5">
                <h2>Frequently Asked Questions</h2>
                <p className="lead">
                  Many people have not been to a live magic show, let alone a hypnosis performance.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-lg-6">
            <div id="accordion-1" className="accordion accordion-faq">
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-1-1"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-1-1"
                  aria-expanded="false"
                  aria-controls="collapse-1-1"
                >
                  <h6 className="mb-0">
                    <span className="ti-receipt mr-3 color-secondary"></span>
                    What is hypnosis? Is it safe?
                  </h6>
                </div>
                <div
                  id="collapse-1-1"
                  className="collapse"
                  aria-labelledby="heading-1-1"
                  data-parent="#accordion-1"
                >
                  <div className="card-body">
                    <p>
                    Hypnosis is a focused mental state of heightened suggestibility, relaxation, and concentration, 
                    often used for therapy, self-improvement or in our case for entertainment. 
                    <br/>
                    It's safe when performed by trained professionals. 
                    <br/>
                    There are a few guidelines we work to such as people with mental health issues, or people on drugs or pregnant shouldn't be hypnotised for entertainment purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-1-2"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-1-2"
                  aria-expanded="false"
                  aria-controls="collapse-1-2"
                >
                  <h6 className="mb-0">
                    <span className="ti-gallery mr-3 color-secondary"></span>
                    How do you get these ideas?
                  </h6>
                </div>
                <div
                  id="collapse-1-2"
                  className="collapse"
                  aria-labelledby="heading-1-2"
                  data-parent="#accordion-1"
                >
                  <div className="card-body">
                    <p>
                      Many times its gin infused brilliance, but in this case credit where its due..
                      Theres an amazing Cypriot called Nikolas Mavresis, he relased an effect a few years ago, through Alakazam Magic, which this show is based on.
                      I came up with other aspects of the show, then discussed it with an amazing hypnotist called Anthiny Jacquin, who has done so many things in the hypnosis world.
                      I talked through a few areas an he told me about a set called 'Impromtu Annie' which is similar to what I was thinking, he was kind enough to share it, and i have adapted some of this after. so credit to Nikolas, Alakazam and Anthony.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6">
            <div id="accordion-2" className="accordion accordion-faq">
              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-2-1"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-2-1"
                  aria-expanded="false"
                  aria-controls="collapse-2-1"
                >
                  <h6 className="mb-0">
                    <span className="ti-receipt mr-3 color-secondary"></span>
                    Is there an age limit?
                  </h6>
                </div>
                <div
                  id="collapse-2-1"
                  className="collapse"
                  aria-labelledby="heading-2-1"
                  data-parent="#accordion-2"
                >
                  <div className="card-body">
                    <p>
                      Technically no, but because of the content if your child is under 16 please contact us.
                      if anyone is under the age of 18, on drugs, pregnant or has mental health issues they shouldn't volunteer to be hypnotised, they can happily watch the show and take part in the magic elements..
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div
                  className="card-header py-4"
                  id="heading-2-2"
                  data-toggle="collapse"
                  role="button"
                  data-target="#collapse-2-2"
                  aria-expanded="false"
                  aria-controls="collapse-2-2"
                >
                  <h6 className="mb-0">
                    <span className="ti-lock mr-3 color-secondary"></span> How
                    Can we hire you?
                  </h6>
                </div>
                <div
                  id="collapse-2-2"
                  className="collapse"
                  aria-labelledby="heading-2-2"
                  data-parent="#accordion-2"
                >
                  <div className="card-body">
                    <p>
                     Yes, i am availabe to perform the show at your location just contact me..
                    </p>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
