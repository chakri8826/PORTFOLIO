import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon10.svg';
import navIcon5 from '../assets/img/leetcode.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <br />
            
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chakradharkommu">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/chakri8826">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://leetcode.com/u/Chakri_Cherry/">
                <img src={navIcon5} alt="" />
              </a>
            </div>
            <p>Owner:Nandyal Chakradhar, Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
