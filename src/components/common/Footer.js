import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-section m-0 mt-0 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p className="text-white">
                  1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                  <br></br>
                  Email: Support@easylearningbd.com
                </p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href="" className="footer-social-link">
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a href="" className="footer-social-link">
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a href="" className="footer-social-link">
                  <i className="fab m-1 h4 fa-twitter"></i>
                </a>
              </Col>

              <Col
                className="p-2 footer-company-section"
                lg={3}
                md={3}
                sm={6}
                xs={12}
              >
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="/" className="footer-link">
                  About Us
                </Link>
                <br></br>
                <Link to="/" className="footer-link">
                  Company Profile
                </Link>
                <br></br>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
                <br></br>
              </Col>

              <Col
                className="p-2 footer-more-info-section"
                lg={3}
                md={3}
                sm={6}
                xs={12}
              >
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="/" className="footer-link">
                  How To Purchase
                </Link>
                <br></br>
                <Link to="/" className="footer-link">
                  Privacy Policy
                </Link>
                <br></br>
                <Link to="/" className="footer-link">
                  Refund Policy
                </Link>
                <br></br>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a>
                  <img src={Google} />
                </a>
                <br></br>
                <a>
                  <img className="mt-2" src={Apple} />
                </a>
                <br></br>
              </Col>
            </Row>
          </Container>
          <Container
            fluid={true}
            className="text-center m-0 pt-3 pb-1 copyright-section"
          >
            <Container>
              <Row>
                <h6 className="text-white">
                  © Copyright 2021 by EUoradea, All Rights Reserved
                </h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
