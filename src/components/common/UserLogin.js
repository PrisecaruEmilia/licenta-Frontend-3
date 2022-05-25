import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
class UserLogin extends Component {
  componentDidMount() {}
  render() {
    return (
      <Fragment>
        <section className="sign-phone-number-section">
          <div className="sign-phone-number-container">
            <div className="sign-phone-number-screen">
              <div className="sign-phone-number-screen-content">
                <form className="sign-phone-number-login">
                  <div className="sign-phone-number-login-field">
                    <i className="sign-phone-number-login-icon fas fa-envelope"></i>
                    <input
                      type="email"
                      className="sign-phone-number-login-input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="sign-phone-number-login-field">
                    <i className="sign-phone-number-login-icon fas fa-lock"></i>
                    <input
                      type="password"
                      className="sign-phone-number-login-input"
                      placeholder="Parola"
                    />
                  </div>
                  <button className="sign-phone-number-button sign-phone-number-login-submit">
                    <span className="sign-phone-number-button-text">
                      Log In Now
                    </span>
                    <i className="sign-phone-number-button-icon fas fa-chevron-right"></i>
                  </button>
                </form>
                <div className="sign-phone-number-forget-password-section">
                  <Link
                    to="/"
                    className="sign-phone-number-forget-password-link"
                  >
                    Ai uitat parola?
                  </Link>
                  <Link to="/" className="sign-phone-number-no-account-link">
                    Nu ai cont?
                  </Link>
                </div>
              </div>
              <div className="sign-phone-number-screen-background">
                <span className="sign-phone-number-screen-background-shape sign-phone-number-screen-background-shape4"></span>
                <span className="sign-phone-number-screen-background-shape screen-background-shape3"></span>
                <span className="sign-phone-number-screen-background-shape sign-phone-number-screen-background-shape2"></span>
                <span className="sign-phone-number-screen-background-shape sign-phone-number-screen-background-shape1"></span>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UserLogin;
