import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import shoe_3 from '../../assets/images/shoe_3.png';

export class Cart extends Component {
  render() {
    return (
      <section className="cart-page-section">
        <Container className="cart-page-container">
          <Row className="cart-section-row p-2 mx-2">
            <div className="text-white my-5">
              <h1>Your shopping cart.</h1>
            </div>
          </Row>
          <Row className="p-2 mx-2">
            <Col className="p-1 my-2" lg={12} md={12} sm={12} xs={12}>
              <Card className="cart-page-item-on-cart">
                <Card.Body>
                  <Row>
                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-col-section-mini"
                    >
                      <div className="image-box home-card cart-card">
                        <img
                          className="img-center"
                          src={shoe_3}
                          alt="SNEAKERSI"
                        ></img>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      lg={4}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h5>Teniși LEVI'S - Brilliant White</h5>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6>ORANGE</h6>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6 className="cart-page-item-product-item-faded-color">
                          SIZE 8.5
                        </h6>
                      </div>
                    </Col>

                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details-qty cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card cart-page-item-product-qty">
                        <Button className="cart-page-item-product-qty-plus-sign">
                          +
                        </Button>
                        <span className="cart-page-item-product-qty-value">
                          2
                        </span>
                        <Button className="cart-page-item-product-qty-minus-sign">
                          -
                        </Button>
                      </div>
                    </Col>
                    <Col
                      md={2}
                      lg={2}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details text-center cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card">
                        <span className="cart-page-item-product-item-faded-color">
                          PRICING
                        </span>{' '}
                        120.00 LEI
                      </div>
                      <Button className="cart-page-item-product-item-on-card cart-page-item-product-item-remove">
                        <i className="fa fa-trash-alt"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1 my-2" lg={12} md={12} sm={12} xs={12}>
              <Card className="cart-page-item-on-cart">
                <Card.Body>
                  <Row>
                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-col-section-mini"
                    >
                      <div className="image-box home-card cart-card">
                        <img
                          className="img-center"
                          src={shoe_3}
                          alt="SNEAKERSI"
                        ></img>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      lg={4}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h5>Teniși LEVI'S - Brilliant White</h5>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6>ORANGE</h6>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6 className="cart-page-item-product-item-faded-color">
                          SIZE 8.5
                        </h6>
                      </div>
                    </Col>

                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details-qty cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card cart-page-item-product-qty">
                        <Button className="cart-page-item-product-qty-plus-sign">
                          +
                        </Button>
                        <span className="cart-page-item-product-qty-value">
                          2
                        </span>
                        <Button className="cart-page-item-product-qty-minus-sign">
                          -
                        </Button>
                      </div>
                    </Col>
                    <Col
                      md={2}
                      lg={2}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details text-center cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card">
                        <span className="cart-page-item-product-item-faded-color">
                          PRICING
                        </span>{' '}
                        120.00 LEI
                      </div>
                      <Button className="cart-page-item-product-item-on-card cart-page-item-product-item-remove">
                        <i className="fa fa-trash-alt"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1 my-2" lg={12} md={12} sm={12} xs={12}>
              <Card className="cart-page-item-on-cart">
                <Card.Body>
                  <Row>
                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-col-section-mini"
                    >
                      <div className="image-box home-card cart-card">
                        <img
                          className="img-center"
                          src={shoe_3}
                          alt="SNEAKERSI"
                        ></img>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      lg={4}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h5>Teniși LEVI'S - Brilliant White</h5>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6>ORANGE</h6>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6 className="cart-page-item-product-item-faded-color">
                          SIZE 8.5
                        </h6>
                      </div>
                    </Col>

                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details-qty cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card cart-page-item-product-qty">
                        <Button className="cart-page-item-product-qty-plus-sign">
                          +
                        </Button>
                        <span className="cart-page-item-product-qty-value">
                          2
                        </span>
                        <Button className="cart-page-item-product-qty-minus-sign">
                          -
                        </Button>
                      </div>
                    </Col>
                    <Col
                      md={2}
                      lg={2}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details text-center cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card">
                        <span className="cart-page-item-product-item-faded-color">
                          PRICING
                        </span>{' '}
                        120.00 LEI
                      </div>
                      <Button className="cart-page-item-product-item-on-card cart-page-item-product-item-remove">
                        <i className="fa fa-trash-alt"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1 my-2" lg={12} md={12} sm={12} xs={12}>
              <Card className="cart-page-item-on-cart">
                <Card.Body>
                  <Row>
                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-col-section-mini"
                    >
                      <div className="image-box home-card cart-card">
                        <img
                          className="img-center"
                          src={shoe_3}
                          alt="SNEAKERSI"
                        ></img>
                      </div>
                    </Col>
                    <Col
                      md={4}
                      lg={4}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h5>Teniși LEVI'S - Brilliant White</h5>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6>ORANGE</h6>
                      </div>
                      <div className="cart-page-item-product-item-on-card text-center">
                        <h6 className="cart-page-item-product-item-faded-color">
                          SIZE 8.5
                        </h6>
                      </div>
                    </Col>

                    <Col
                      md={3}
                      lg={3}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details-qty cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card cart-page-item-product-qty">
                        <Button className="cart-page-item-product-qty-plus-sign">
                          +
                        </Button>
                        <span className="cart-page-item-product-qty-value">
                          2
                        </span>
                        <Button className="cart-page-item-product-qty-minus-sign">
                          -
                        </Button>
                      </div>
                    </Col>
                    <Col
                      md={2}
                      lg={2}
                      sm={12}
                      xs={12}
                      className="cart-page-item-product-details text-center cart-page-item-col-section-mini"
                    >
                      <div className="cart-page-item-product-item-on-card">
                        <span className="cart-page-item-product-item-faded-color">
                          PRICING
                        </span>{' '}
                        120.00 LEI
                      </div>
                      <Button className="cart-page-item-product-item-on-card cart-page-item-product-item-remove">
                        <i className="fa fa-trash-alt"></i>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="p-2 mx-2">
            <div className="cart-section-subtotal-row">
              <div className="text-white">
                <h3>Total products: 5</h3>
              </div>
              <div className="text-white">
                <h5>SUBTOTAL: 480 Lei</h5>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Cart;
