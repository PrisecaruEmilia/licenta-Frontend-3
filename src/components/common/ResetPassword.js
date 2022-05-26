import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resetPasswordImage from '../../assets/images/undraw_access_account_re_8spm.svg';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
    };
  }

  // Reset Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      token: this.state.token,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserResetPassword, data)
      .then((response) => {
        this.setState({ message: response.data.message });

        toast.success(this.state.message, {
          position: 'top-right',
        });
        document.getElementById('reset-password-form').reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
        toast.error(this.state.message, {
          position: 'top-right',
        });
      });
  };
  render() {
    return (
      <section className="reset-password-page-section">
        <div className="reset-password-page-container">
          <Row className="p-2 mx-2">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black reset-password-page-card">
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Resetează parola
                          </p>

                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={this.formSubmit}
                            id="reset-password-form"
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  placeholder="Pin"
                                  onChange={(e) => {
                                    this.setState({ token: e.target.value });
                                  }}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                  placeholder="Email"
                                  onChange={(e) => {
                                    this.setState({ email: e.target.value });
                                  }}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                  placeholder="Noua parolă"
                                  onChange={(e) => {
                                    this.setState({ password: e.target.value });
                                  }}
                                />
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4cd"
                                  className="form-control"
                                  placeholder="Confirmă parola"
                                  onChange={(e) => {
                                    this.setState({
                                      password_confirmation: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn reset-password-page-btn-reset-password btn-lg"
                              >
                                Resetează
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src={resetPasswordImage}
                            className="img-fluid"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
        <ToastContainer />
      </section>
    );
  }
}

export default ResetPassword;
