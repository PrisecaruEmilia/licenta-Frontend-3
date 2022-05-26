import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import AppURL from '../../api/AppUrl';
import registerImage from '../../assets/images/undraw_authentication_re_svpt.svg';
import axios from 'axios';
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      loggedIn: false,
    };
  }

  // Register Form Submit Method
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };

    axios
      .post(AppURL.UserRegister, data)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        this.setState({ loggedIn: true });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // After Login Redirect to Profile Page
    if (this.state.loggedIn) {
      return <Redirect to={'/profile'} />;
    }
    return (
      <section className="register-page-section">
        <div className="register-page-container">
          <Row className="p-2 mx-2">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black register-page-card">
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-6 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>

                          <form
                            className="mx-1 mx-md-4"
                            onSubmit={this.formSubmit}
                          >
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  placeholder="Nume"
                                  onChange={(e) => {
                                    this.setState({ name: e.target.value });
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
                                  placeholder="Parola"
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
                                  placeholder="Repeta parola"
                                  onChange={(e) => {
                                    this.setState({
                                      password_confirmation: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            </div>

                            <div className="d-flex justify-content-center mb-2">
                              <label className="text-center">
                                Ai cont?
                                <Link
                                  to="/login"
                                  className="d-block text-center"
                                >
                                  Login
                                </Link>
                              </label>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn register-page-btn-register btn-lg"
                              >
                                Sign Up
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src={registerImage}
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
      </section>
    );
  }
}

export default Register;
