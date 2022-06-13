import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Apple from '../../assets/images/apple.png';
import Google from '../../assets/images/google.png';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      phone_number: '',
      email_address: '',
      android_app_link: '',
      ios_app_link: '',
      facebook_link: '',
      twitter_link: '',
      instagram_link: '',
      copyright_text: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSiteInfo)
      .then((response) => {
        let StatusCode = response.status;
        if (StatusCode == 200) {
          let JsonData = response.data[0];
          this.setState({
            address: JsonData['address'],
            phone_number: JsonData['phone_number'],
            email_address: JsonData['email_address'],
            android_app_link: JsonData['android_app_link'],
            ios_app_link: JsonData['ios_app_link'],
            facebook_link: JsonData['facebook_link'],
            twitter_link: JsonData['twitter_link'],
            instagram_link: JsonData['instagram_link'],
            copyright_text: JsonData['copyright_text'],
            loaderDiv: 'd-none',
            mainDiv: '',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <div className="footer-section m-0 mt-0 pt-3 shadow-sm">
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <div className={this.state.loaderDiv}>
                  <div
                    className="ph-item"
                    style={{ backgroundColor: '#38383a', border: 'none' }}
                  >
                    <div className="ph-col-12">
                      <div className="ph-row">
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={this.state.mainDiv}>
                  <h5 className="footer-menu-title">ADRESĂ SEDIU</h5>
                  <p className="text-white">
                    {this.state.address}
                    <br></br>
                    Email: {this.state.email_address}
                  </p>
                </div>

                <h5 className="footer-menu-title">LINK-URI</h5>
                <a
                  href={this.state.facebook_link}
                  target="_blank"
                  className="footer-social-link"
                >
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a
                  href={this.state.instagram_link}
                  target="_blank"
                  className="footer-social-link"
                >
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a
                  href={this.state.twitter_link}
                  target="_blank"
                  className="footer-social-link"
                >
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
                <h5 className="footer-menu-title">COMPANIE</h5>
                <Link to="/about" className="footer-link">
                  Despre Noi
                </Link>
                <br></br>
                <Link to="/" className="footer-link">
                  Descarcă aplicația mobilă
                </Link>
                <br></br>
                <Link to="/contact" className="footer-link">
                  Contact
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
                <h5 className="footer-menu-title">INFORMAȚII</h5>
                <Link to="/purchase" className="footer-link">
                  Cum se cumpără
                </Link>
                <br></br>
                <Link to="/privacy" className="footer-link">
                  Politica de Confidențialitate
                </Link>
                <br></br>
                <Link to="/refund" className="footer-link">
                  Politica de rambursare
                </Link>
                <br></br>
              </Col>

              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                <a href={this.state.android_app_link} target="_blank">
                  <img src={Google} />
                </a>
                <br></br>
                <a href={this.state.ios_app_link} target="_blank">
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
                <h6 className="text-white">{this.state.copyright_text}</h6>
              </Row>
            </Container>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
