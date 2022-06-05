import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppUrl';
import validations from '../../validation/validations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      address: '',
      phone_number: '',
      email_address: '',
    };
  }

  nameOnChange = (event) => {
    let name = event.target.value;

    this.setState({ name: name });
  };

  emailOnChange = (event) => {
    let email = event.target.value;

    this.setState({ email: email });
  };

  subjectOnChange = (event) => {
    let subject = event.target.value;

    this.setState({ subject: subject });
  };

  messageOnChange = (event) => {
    let message = event.target.value;

    this.setState({ message: message });
  };

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
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let subject = this.state.subject;
    let message = this.state.message;
    let sendBtn = document.getElementById('send-btn');
    let contactForm = document.getElementById('contact-page-contact-form');

    if (name.length == 0) {
      toast.error('Vă rugăm completați numele');
    } else if (email.length == 0) {
      toast.error('Vă rugăm completați email-ul');
    } else if (subject.length == 0) {
      toast.error('Vă rugăm completați subiectul');
    } else if (message.length == 0) {
      toast.error('Vă rugăm completați mesajul');
    } else if (!validations.NameRegx.test(name)) {
      toast.error('Nume invalid');
    } else {
      sendBtn.innerHTML = 'Sending...';
      let RenderFormData = new FormData();
      RenderFormData.append('name', name);
      RenderFormData.append('email', email);
      RenderFormData.append('subject', subject);
      RenderFormData.append('message', message);

      axios
        .post(AppURL.PostContact, RenderFormData)
        .then(function (response) {
          if (response.status == 200 && response.data == 1) {
            toast.success('Mesaj trimis cu succes');
            sendBtn.innerHTML = 'Send';
            contactForm.reset();
          } else {
            toast.error('Eroare');
            sendBtn.innerHTML = 'Send';
          }
        })
        .catch(function (error) {
          toast.error('Eroare');
          sendBtn.innerHTML = 'Send';
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
                  Aveți vreo intrebare? Vă rugăm nu ezitați să ne contactați
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
                          id="send-btn"
                          type="submit"
                          className="btn btn-primary contact-page-submit-button"
                        >
                          Trimite
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <i className="fas fa-map-marker-alt fa-2x contact-page-icon"></i>
                        <p>{this.state.address}</p>
                      </li>

                      <li>
                        <i className="fas fa-phone mt-4 fa-2x contact-page-icon"></i>
                        <p>+ {this.state.phone_number}</p>
                      </li>

                      <li>
                        <i className="fas fa-envelope mt-4 fa-2x contact-page-icon"></i>
                        <p>{this.state.email_address}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </div>
        <ToastContainer />
      </section>
    );
  }
}

export default Contact;
