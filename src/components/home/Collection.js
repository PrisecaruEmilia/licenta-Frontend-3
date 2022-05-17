import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class Collection extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('collection'))
      .then((response) => {
        this.setState({ productData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let updatedData;
    if (this.state.productData.length >= 2) {
      updatedData = [...this.state.productData].splice(0, 2);
    } else {
      updatedData = [...this.state.productData];
    }

    const CollectionList = updatedData;
    let classConstraint;
    let subcategoryUpper;
    const RenderView = CollectionList.map((CollectionList, i) => {
      if (i == 0) {
        classConstraint = 'collection-card-begin';
      } else if (i == 1) {
        classConstraint = 'collection-card-middle';
      }
      subcategoryUpper = CollectionList.subcategory.toUpperCase();
      if (CollectionList.special_price == '') {
        return (
          <Col
            className="p-3 home-col"
            key={i}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Card
              className={
                'image-box home-card collection-card ' + classConstraint
              }
            >
              <div className="top-card">
                <p className="card-shoe-category">{subcategoryUpper}</p>
                {/* <p className="card-tag">NEW</p> */}
              </div>
              <img
                className="img-center"
                src={CollectionList.image}
                alt={CollectionList.subcategory}
              ></img>
              <Card.Body>
                <p className="product-name-on-card">{CollectionList.name}</p>
                <p className="product-price-on-card">
                  Price : {CollectionList.price} lei
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      } else {
        return (
          <Col
            className="p-3 home-col"
            key={i}
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Card
              className={
                'image-box home-card collection-card ' + classConstraint
              }
            >
              <div className="top-card">
                <p className="card-shoe-category">{subcategoryUpper}</p>
                {/* <p className="card-tag">NEW</p> */}
              </div>
              <img
                className="img-center"
                src={CollectionList.image}
                alt={CollectionList.subcategory}
              ></img>
              <Card.Body>
                <p className="product-name-on-card">{CollectionList.name}</p>
                <p className="product-price-on-card">
                  Price :{' '}
                  <strike className="text-secondary">
                    {CollectionList.price}
                  </strike>{' '}
                  {CollectionList.special_price} lei
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      }
    });
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
                {RenderView}
                {/* <Col
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
                </Col> */}
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
