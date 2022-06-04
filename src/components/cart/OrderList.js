import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export class OrderList extends Component {
  render() {
    return (
      <Fragment>
        <section className="order-list-page-section">
          <div className="order-list-page-container">
            <Row className="p-2 mx-2">
              <Col className="order-list-page-column">Order List page</Col>
            </Row>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default OrderList;
