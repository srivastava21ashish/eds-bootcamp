// Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/VeniaLogo-n77.svg'
import instagramIcon from '../../assets/1-instagram.jpg'
import facebookIcon from '../../assets/1-facebook.jpg'
import twitterIcon from '../../assets/1-twitter.jpg'

export default function Footer() {
  return (
    
    <footer>
      <div className="container grid">
        <div className="grid-col-3">
          <div className="text-head-m pd-b-10">Accounts</div>
          <div className="text-body-s">Sign In</div>
          <div className="text-body-s">Register</div>
          <div className="text-body-s">Order Status</div>
        </div>
        <div className="grid-col-3">
          <div className="text-head-m pd-b-10">About Us</div>
          <div className="text-body-s">Our Story</div>
          <div className="text-body-s">Careers</div>
        </div>
        <div className="grid-col-3">
          <div className="text-head-m pd-b-10">Help Us</div>
          <div className="text-body-s">Contact Us</div>
          <div className="text-body-s">Order Status</div>
          <div className="text-body-s">Returns</div>
        </div>
        <div className="grid-col-3">
          <div className="text-head-m pd-b-10">Follow Us!</div>
          <div className="text-body-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</div>
          <div className="flex sm-icon">
            <img src={instagramIcon} alt="Instagram" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
          </div>
        </div>
      </div>
      <hr />
      <div className="container grid text-body-s pd-t-10 grid-v-center">
        <div className="grid-col-3 hide-m">
          <a href="index.html" className="logo">
            <img src={logo} alt="Venia" />
          </a>
        </div>
        <div className="grid-col-6 align-center hide-m">
          © Company Name Address Ave, City Name, State ZIP
        </div>
        <div className="grid-col-3 align-right align-s-center">
          <a href="terms-of-use.html" className="text-link">Terms of Use</a>
          <a href="privacy-policy.html" className="text-link">Privacy Policy</a>
        </div>
        <div className="grid-col-3 align-center hide show-m">
          © Company Name Address Ave, City Name, State ZIP
        </div>
        <div className="grid-col-3 align-center hide show-m">
          <a href="index.html" className="logo">
            <img src={logo} alt="Venia" />
          </a>
        </div>
      </div>
    </footer>
  );
}