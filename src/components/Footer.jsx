import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="container">
          <div className="footer-content">
            <div className="row g-3 g-lg-4 ">
              <div className="col-lg-3 col-md-6">
                <div>
                  <h4 className="footer-title py-2 py-md-3 mb-0 mb-md-3">
                    ABOUT STORE
                  </h4>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2">
                        {" "}
                        <i className="ri-map-pin-line me-2"></i>1234 Heaven
                        Stress, Beverly Hill.
                      </li>
                      <li className="mb-2">
                        <i className="ri-phone-line"></i>(800) 123 456 789
                      </li>
                      <li className="mb-2">
                        <i className="ri-mail-ai-line"></i>
                        info@yourdomain.com
                      </li>
                      <li className="mb-2">
                        <i className="ri-time-line"></i>8:00 - 19:00, Monday -
                        Saturday
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div>
                  <h4 className="footer-title py-2 py-md-3 mb-0 mb-md-3">
                    MY ACCOUNT
                  </h4>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2 text-capitalize"> My account </li>
                      <li className="mb-2 text-capitalize"> Login </li>
                      <li className="mb-2 text-capitalize"> my cart </li>
                      <li className="mb-2 text-capitalize"> wishlist </li>
                      <li className="mb-2 text-capitalize"> checkout </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div>
                  <h4 className="footer-title py-2 py-md-3 mb-0 mb-md-3">
                    INFORMATION
                  </h4>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2 text-capitalize"> abot us </li>
                      <li className="mb-2 text-capitalize"> careers </li>
                      <li className="mb-2 text-capitalize">
                        {" "}
                        Delivery Inforamtion{" "}
                      </li>
                      <li className="mb-2 text-capitalize"> Privacy Policy </li>
                      <li className="mb-2 text-capitalize">
                        {" "}
                        Terms & Condition
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div>
                  <h4 className="footer-title py-2 py-md-3 mb-0 mb-md-3">
                    CUSTOMER SERVICE
                  </h4>
                  <div>
                    <ul className="p-0">
                      <li className="mb-2 text-capitalize">
                        {" "}
                        Shipping Policy{" "}
                      </li>
                      <li className="mb-2 text-capitalize">
                        {" "}
                        Compensation First{" "}
                      </li>
                      <li className="mb-2 text-capitalize"> My Account </li>
                      <li className="mb-2 text-capitalize"> Return Policy</li>
                      <li className="mb-2 text-capitalize"> Contact Us </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer