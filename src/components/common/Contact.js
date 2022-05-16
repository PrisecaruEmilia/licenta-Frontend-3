import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppUrl';
import validations from '../../validation/validations';
export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  nameOnChange = (event) => {
    let name = event.target.value;
    // alert(name);
    this.setState({ name: name });
  };

  emailOnChange = (event) => {
    let email = event.target.value;
    // alert(email);
    this.setState({ email: email });
  };

  subjectOnChange = (event) => {
    let subject = event.target.value;
    // alert(subject);
    this.setState({ subject: subject });
  };

  messageOnChange = (event) => {
    let message = event.target.value;
    // alert(message);
    this.setState({ message: message });
  };

  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let subject = this.state.subject;
    let message = this.state.message;

    if (name.length == 0) {
      alert('Vă rugăm completați numele');
    } else if (email.length == 0) {
      alert('Vă rugăm completați email-ul');
    } else if (subject.length == 0) {
      alert('Vă rugăm completați subiectul');
    } else if (message.length == 0) {
      alert('Vă rugăm completați mesajul');
    } else if (!validations.NameRegx.test(name)) {
      alert('Nume invalid');
    } else {
      let RenderFormData = new FormData();
      RenderFormData.append('name', name);
      RenderFormData.append('email', email);
      RenderFormData.append('subject', subject);
      RenderFormData.append('message', message);

      axios
        .post(AppURL.PostContact, RenderFormData)
        .then(function (response) {
          if (response.status == 200 && response.data == 1) {
            alert('Mesaj trimis cu succes');
          } else {
            alert('Eroare');
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }

    event.preventDefault();
  };
  render() {
    return (
      <section className="contact-page-section">
        <div className="contact-page-container">
          <Row className="p-2 mx-2">
            <Col className="contact-page-column">
              <section className="mb-4">
                <h2 className="h1-responsive font-weight-bold text-center my-4">
                  Contact
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Aveți vre-o intrebare? Vă rugăm nu ezitați să ne contactați
                  direct. Echipa noastră va reveni la dvs. în câteva ore pentru
                  a vă ajuta.
                </p>

                <div className="row">
                  <div className="col-md-9 mb-md-0 mb-5">
                    <form
                      onSubmit={this.onFormSubmit}
                      id="contact-page-contact-form"
                      name="contact-page-contact-form"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="md-form mb-2">
                            <label htmlFor="contact-page-name-input-field">
                              Nume
                            </label>
                            <input
                              onChange={this.nameOnChange}
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
                              Email
                            </label>
                            <input
                              onChange={this.emailOnChange}
                              type="email"
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
                              Subiect
                            </label>
                            <input
                              onChange={this.subjectOnChange}
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
                              Mesaj
                            </label>
                            <textarea
                              onChange={this.messageOnChange}
                              type="text"
                              id="contact-page-message-input-textarea"
                              name="contact-page-message-input-textarea"
                              rows="3"
                              className="form-control md-textarea contact-page-input-field"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-md-left">
                        <button
                          type="submit"
                          className="btn btn-primary contact-page-submit-button"
                        >
                          Send
                        </button>
                      </div>
                    </form>
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
