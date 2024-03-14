import React from 'react'
import gpt3Logo from '../../assets/logo.svg';
import './footer.css'
const Footer = () => {
  return (
    <div className="container-footer">
      <div className="head">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="btn">
        <p>Request Early Access</p>
      </div>
      <div className="links">
          <div className="logo">
            <img src={gpt3Logo} alt="gpt3Logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
          </div>
          <div className="box">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="box">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="box">
            <h4>Get in touch</h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
      </div>
      <div className="copy-right">
        <p>@2024 Mohamed Amr GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer