import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import Loader from "./Loader";

const Footer = () => {
  return (
    <FooterWrapper>
        
      <div className="footer-content">
        
        <div className="footer-left">
            <div class="loader"><Loader/></div>
            <br/>
          <h1> LET'S CONNECT</h1>
          <p><b>"Design. Code. Repeat."</b></p>
        </div>

        <div className="footer-right">
          <a href="https://github.com/terekholkarnandini" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nandini-terekholkar-7b0651340" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/_.nandinii____">
            <FaInstagram />
          </a>
          
        </div>
      </div>
      <div className="copyright">
        © 2025 Nandini. All rights reserved.
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg,  #040509, #16143e, #210a29);
  color: #fff;
  padding: 4rem 2rem 2rem;
 
  position: relative;
 

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: auto;
  }
     
 

  .footer-left h1 {
    color:rgb(164, 59, 196);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .footer-left p {
    font-size: 0.95rem;
    color: #ccc;
  }

  .footer-right {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  .footer-right a {
    font-size: 1.5rem;
    color: rgb(164, 59, 196);
    transition: 0.3s ease;
  }

  .footer-right a:hover {
    transform: scale(1.2);
    color: #fff;
  }

  

  .copyright {
    margin-top: 3rem;
    text-align: center;
    font-size: 0.8rem;
    color: #aaa;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }

    .footer-right {
      justify-content: center;
    }
  }
`;


export default Footer;
