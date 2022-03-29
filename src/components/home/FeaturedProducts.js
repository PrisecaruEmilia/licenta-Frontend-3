import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import shoe_1 from '../../assets/images/shoe_1.png';
export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="home-section">
          <Row className="home-section-row">
            <div className="text-white mb-55">
              <h1>Products</h1>
            </div>
          </Row>
          <Row className="home-section-row">
            <Col
              className="p-3 first-feature-product-col"
              key={1}
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
            >
              <div className="first-feature-product-image"></div>
            </Col>
            <Col className="second-feature-product-col">
              <Row className="home-section-row">
                <Col
                  className="p-3 home-col"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box home-card featured-card featured-card-begin">
                    <div className="top-card">
                      <p className="card-shoe-category">DAY-TO-DAY</p>
                      <p className="card-tag">NEW</p>
                    </div>

                    <img
                      className="img-center"
                      src={shoe_1}
                      alt="SNEAKERSI"
                    ></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Teniși LEVI'S - Brilliant White
                      </p>
                      <p className="product-price-on-card">
                        Price : 179,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="p-3 home-col"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box home-card featured-card featured-card-middle">
                    <div className="top-card">
                      <p className="card-shoe-category">STREET</p>
                      <p className="card-tag">NEW</p>
                    </div>
                    <img
                      className="img-center"
                      src={shoe_3}
                      alt="SNEAKERSI"
                    ></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Pantofi NIKE - Air Jordan
                      </p>
                      <p className="product-price-on-card">
                        Price : 898,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="p-3 home-col"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box home-card featured-card featured-card-last">
                    <div className="top-card">
                      <p className="card-shoe-category">DAY-TO-DAY</p>
                      <p className="card-tag">NEW</p>
                    </div>
                    <img
                      className="img-center"
                      src={shoe_4}
                      alt="SNEAKERSI"
                    ></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Sneakers PUMA - Rs-X³ Puma
                      </p>
                      <p className="product-price-on-card">
                        Price : 348,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
