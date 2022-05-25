import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/undraw_sign_in_re_o58h.svg';
export class Login extends Component {
  render() {
    return (
      <section className="login-page-section">
        <div className="login-page-container">
          <Row className="p-2 mx-2">
            <div className="container">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-lg-12 col-xl-11">
                  <div class="card text-black login-page-card">
                    <div class="card-body p-md-5">
                      <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-6 col-xl-6 order-2 order-lg-1">
                          <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Log in
                          </p>

                          <form class="mx-1 mx-md-4">
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  class="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  class="form-control"
                                  placeholder="Parola"
                                />
                              </div>
                            </div>

                            <div class="d-flex justify-content-around mb-5">
                              <label class="text-center">
                                Ai uitat parola?
                                <Link to="/" class="d-block text-center">
                                  Solicită una nouă
                                </Link>
                              </label>
                              <label class="text-center">
                                Nu ai cont?
                                <Link
                                  to="/register"
                                  class="d-block text-center"
                                >
                                  Register
                                </Link>
                              </label>
                            </div>
                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="button"
                                class="btn login-page-btn-login btn-lg"
                              >
                                Log in
                              </button>
                            </div>
                          </form>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src={loginImage}
                            class="img-fluid"
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

export default Login;
