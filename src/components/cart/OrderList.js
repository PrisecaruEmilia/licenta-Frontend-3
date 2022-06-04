import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    let email = this.props.user.email;
    axios
      .get(AppURL.OrderListByUser(email))
      .then((response) => {
        this.setState({ productData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const DataList = this.state.productData;
    const RenderView = DataList.map((ProductList, i) => {
      return (
        <div key={i}>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h5>{ProductList.product_name}</h5>
            <h6>Cantitate = {ProductList.quantity} </h6>
            <p>
              {ProductList.size} | {ProductList.color}
            </p>
            <h6>
              Preț = {ProductList.unit_price} x {ProductList.quantity} ={' '}
              {ProductList.total_price} Lei
            </h6>
            <h6>Stauts = {ProductList.order_status} </h6>
          </Col>
          <Button className="btn btn-danger">Post Review</Button>
          <hr></hr>
        </div>
      );
    });
    return (
      <Fragment>
        <section className="order-list-page-section">
          <div className="order-list-page-container">
            <Row className="p-2 mx-2">
              <Container>
                <div className="section-title text-center my-5">
                  <h2>Istoricul comenzilor</h2>
                </div>

                <Card>
                  <Card.Body>
                    <Row>{RenderView}</Row>
                  </Card.Body>
                </Card>
              </Container>
            </Row>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default OrderList;
