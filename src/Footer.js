import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import './static/Footer.css'
function Footer() {
  return (
      <div className="left col-md-12 col-xs-12">
    <div className="footer d-flex flex-row justify-content-around mt-5 mb-5">
      <div className="card card1" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title"><FontAwesomeIcon icon={faPhone} color="rgb(93,197,101)" size="4x" /></h5>
          <p className="card-text">
           Contact Us
          </p>< br />
          <p>+8801845782291</p>
          <a href="#" className="btn">
            Order a Call Back
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title"><FontAwesomeIcon icon={faEnvelope} color="rgb(93,197,101)" size="4x" /></h5>
          <p className="card-text">
            Our Email 
          </p><br/>
          <p>info@idealclipping.com</p>

          <a href="#" className="btn">
            Start Writing
          </a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title"><FontAwesomeIcon icon={faMessage} color="rgb(93,197,101)" size="4x" /></h5>
          <p className="card-text">
            Our Skype ID 
          </p><br />
          <p>idealclipping</p>
          <a href="#" className="btn">
              Call Skype
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
