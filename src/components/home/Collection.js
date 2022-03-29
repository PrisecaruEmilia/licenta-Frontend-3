import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';

export class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="home-section">
          <Row className="home-section-row">
            <Col className="home-col">
              <Row className="home-section-row">
                <Col
                  className="p-3 home-col"
                  key={1}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <h1 className="pt-5 pb-5 text-white">Brand Shoes</h1>
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
                  <Card className="image-box home-card collection-card collection-card-begin">
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
                  <Card className="image-box home-card collection-card collection-card-middle">
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
            <Col
              className="p-3 last-collection-product-col-image home-col"
              key={1}
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
            >
              <div className="last-collection-product-image"></div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Collection;
