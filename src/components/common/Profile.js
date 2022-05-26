import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import profilePhoto from '../../assets/images/undraw_profile_pic_ic-5-t.svg';
import { Redirect } from 'react-router';
export class Profile extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }
    return (
      <section className="profile-page-section">
        <div className="profile-page-container">
          <Row className="p-2 mx-2">
            <Col className="profile-page-column">
              <div className="profile-page-main-container">
                <div className="profile-page-user-image">
                  <img src={profilePhoto} alt="profile-photo" />
                </div>

                <div className="profile-page-content">
                  <h3 className="profile-page-user-name">{name}</h3>
                  <p className="profile-page-user-email">Email: {email}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Profile;
