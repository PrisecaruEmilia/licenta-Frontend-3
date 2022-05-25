import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import profilePhoto from '../../assets/images/undraw_profile_pic_ic-5-t.svg';
export class Profile extends Component {
  render() {
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
                  <h3 className="profile-page-user-name">Some Name</h3>
                  <p className="profile-page-user-email">
                    Email: someone@gmail.com
                  </p>
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
