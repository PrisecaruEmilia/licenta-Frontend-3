import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export class Contact extends Component {
  render() {
    return (
      <section className="contact-page-section">
        <div className="contact-page-container">
          <Row className="p-2 mx-2">
            <Col className="contact-page-column">
              <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">
                  Contact us
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Do you have any questions? Please do not hesitate to contact
                  us directly. Our team will come back to you within a matter of
                  hours to help you.
                </p>

                <div className="row">
                  <div className="col-md-9 mb-md-0 mb-5">
                    <form
                      id="contact-page-contact-form"
                      name="contact-page-contact-form"
                      action=""
                      method=""
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="md-form mb-2">
                            <label htmlFor="contact-page-name-input-field">
                              Your name
                            </label>
                            <input
                              type="text"
                              id="contact-page-name-input-field"
                              name="contact-page-name-input-field"
                              className="form-control contact-page-input-field"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="md-form mb-2">
                            <label htmlFor="contact-page-email-input-field">
                              Your email
                            </label>
                            <input
                              type="text"
                              id="contact-page-email-input-field"
                              name="contact-page-email-input-field"
                              className="form-control contact-page-input-field"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form mb-2">
                            <label htmlFor="contact-page-subject-input-field">
                              Subject
                            </label>
                            <input
                              type="text"
                              id="contact-page-subject-input-field"
                              name="contact-page-subject-input-field"
                              className="form-control contact-page-input-field"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form mb-2">
                            <label htmlFor="contact-page-message-input-textarea">
                              Your message
                            </label>
                            <textarea
                              type="text"
                              id="contact-page-message-input-textarea"
                              name="contact-page-message-input-textarea"
                              rows="3"
                              className="form-control md-textarea contact-page-input-field"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="text-center text-md-left">
                      <a className="btn btn-primary contact-page-submit-button">
                        Send
                      </a>
                    </div>
                  </div>

                  <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fas fa-map-marker-alt fa-2x contact-page-icon"></i>
                        <p>San Francisco, CA 94126, USA</p>
                      </li>

                      <li>
                        <i className="fas fa-phone mt-4 fa-2x contact-page-icon"></i>
                        <p>+ 01 234 567 89</p>
                      </li>

                      <li>
                        <i className="fas fa-envelope mt-4 fa-2x contact-page-icon"></i>
                        <p>Support@easylgbd.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Contact;
