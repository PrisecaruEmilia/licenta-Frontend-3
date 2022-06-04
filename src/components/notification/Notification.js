import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import { Redirect } from 'react-router';
export class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      notificationData: [],
      notificationMsg: '',
      notificationTitle: '',
      notificationDate: '',
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.NotificationHistory)
      .then((response) => {
        this.setState({
          notificationData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show: true });
    let Nmsg = event.target.getAttribute('data-message');
    let Ntitle = event.target.getAttribute('data-title');
    let Ndate = event.target.getAttribute('data-date');
    this.setState({
      notificationMsg: Nmsg,
      notificationTitle: Ntitle,
      notificationDate: Ndate,
    });
  };
  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }
    const NotificationList = this.state.notificationData;
    const renderView = NotificationList.map((NotificationList, i) => {
      return (
        <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
          <Card className="notification-card">
            <Card.Body>
              <h6>{NotificationList.title}</h6>
              <p className="py-1 px-0 text-primary m-0">
                <i className="fa h6 fa-bell notification-page-bell-icon"></i>{' '}
                Data: {NotificationList.date}
              </p>
              <p className="py-1 px-3 text-primary m-1">Status: Unread</p>
              <Button
                onClick={this.handleShow}
                data-title={NotificationList.title}
                data-date={NotificationList.date}
                data-message={NotificationList.message}
                className="btn btn-notification-page-details mx-4"
              >
                Details{' '}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <section className="notification-page-section">
        <Container className="notification-page-container">
          <Row className="p-2 mx-2">{renderView}</Row>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa h6 fa-bell notification-page-bell-icon"></i>{' '}
              Data: {this.state.notificationDate}
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.notificationTitle}</h6>
            <p>{this.state.notificationMsg}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default Notification;
