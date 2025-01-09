export default function Price({ hasBg }) {
  return (
    <>
      <div className="overflow-hidden">
        <section
          id="pricing"
          className={`package-section ${
            hasBg ? "gray-light-bg" : "background-shape-right"
          } ptb-100`}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2>
                    Upcoming Shows <br />
                    Come and join the party
                  </h2>
                  <p className="lead">
                   Below are the places that we are performing, if you cant see the venue contact us.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
             
              <div className="col-lg-4 col-md">
                <div className="card text-center popular-price single-pricing-pack p-5">
                  <h5 className="mb-2">Bow Street Police Museum</h5>
                  <div className="pricing-img mt-3 mb-4">
                    <img
                      src="/assets/img/bow-street-logo.png"
                      alt="pricing img"
                      className="img-fluid"
                    />
                  </div>

                  <div className="card-body p-0">
                    <ul className="list-unstyled text-sm pricing-feature-list">
                    <li>Bow Street Police Museum</li>
                    <li>Covent Garden</li>
                    <li>London</li>
                    <li>Doors Open 18:30</li>
                      <li>Tour Of The Musuem</li>
                      <li>90 Minute Show</li>
                     
                    </ul>
                    <div className="py-4 border-0 pricing-header">
                      <div className="h1 text-center mb-0 color-secondary">
                        £<span className="price font-weight-bolder">25</span>
                      </div>
                    </div>
                    <a href="https://buy.stripe.com/00g9AN4ab0yR1iM002" className="btn solid-btn" target="_blank">
                      Purchase now
                    </a>
                  </div>
                </div>
              </div>
         

              
         
            </div>
            <div className="mt-5 text-center">
              <p className="mb-2">
                If you need help or advice or want us to perform at your venvue?
                <a href="#/" className="color-secondary">
                  {" "}
                  Contact us{" "}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
