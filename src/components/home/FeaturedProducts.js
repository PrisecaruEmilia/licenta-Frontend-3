import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import shoe_1 from '../../assets/images/shoe_1.png';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('featured'))
      .then((response) => {
        this.setState({ productData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let updatedData;
    if (this.state.productData.length >= 3) {
      updatedData = [...this.state.productData].splice(0, 3);
    } else {
      updatedData = [...this.state.productData];
    }

    const FeaturedList = updatedData;
    let classConstraint;
    let subcategoryUpper;
    const RenderView = FeaturedList.map((FeaturedList, i) => {
      if (i == 0) {
        classConstraint = 'featured-card-begin';
      } else if (i == 1) {
        classConstraint = 'featured-card-middle';
      } else if (i == 2) {
        classConstraint = 'featured-card-last';
      }
      subcategoryUpper = FeaturedList.subcategory.toUpperCase();
      if (FeaturedList.special_price == '') {
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
            <Link to="/product-details">
              <Card
                className={
                  'image-box home-card featured-card ' + classConstraint
                }
              >
                <div className="top-card">
                  <p className="card-shoe-category">{subcategoryUpper}</p>
                </div>

                <img
                  className="img-center"
                  src={FeaturedList.image}
                  alt={FeaturedList.subcategory}
                ></img>
                <Card.Body>
                  <p className="product-name-on-card">{FeaturedList.name}</p>
                  <p className="product-price-on-card">
                    Preț : {FeaturedList.price} lei
                  </p>
                </Card.Body>
              </Card>
            </Link>
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
            <Link to="/product-details">
              <Card
                className={
                  'image-box home-card featured-card ' + classConstraint
                }
              >
                <div className="top-card">
                  <p className="card-shoe-category">{subcategoryUpper}</p>
                </div>

                <img
                  className="img-center"
                  src={FeaturedList.image}
                  alt={FeaturedList.subcategory}
                ></img>
                <Card.Body>
                  <p className="product-name-on-card">{FeaturedList.name}</p>
                  <p className="product-price-on-card">
                    Preț :{' '}
                    <strike className="text-secondary">
                      {FeaturedList.price}
                    </strike>{' '}
                    {FeaturedList.special_price} lei
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });
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
              <Row className="home-section-row">{RenderView}</Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
