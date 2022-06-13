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
      loaderDiv: '',
      mainDiv: 'd-none',
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('collection'))
      .then((response) => {
        this.setState({
          productData: response.data,
          loaderDiv: 'd-none',
          mainDiv: '',
        });
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
            <Link to={'/product-details/' + CollectionList.id}>
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
                    Preț : {CollectionList.price} lei
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
            <Link to={'/product-details/' + CollectionList.id}>
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
                    Preț :{' '}
                    <strike className="text-secondary">
                      {CollectionList.price}
                    </strike>{' '}
                    {CollectionList.special_price} lei
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
            <Col className="home-col">
              <Row className={'home-section-row ' + this.state.loaderDiv}>
                <Col
                  className="p-3 home-col"
                  key={1}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <h1 className="pt-5 pb-5 text-white">Brand</h1>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div
                        className="ph-item"
                        style={{ background: '#3d3d3f', border: 'none' }}
                      >
                        <div className="ph-col-12">
                          <div className="ph-picture"></div>
                          <div className="ph-row">
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-12"></div>
                          </div>
                        </div>
                        <div className="ph-col-2">
                          <div className="ph-avatar"></div>
                        </div>
                        <div>
                          <div className="ph-row">
                            <div className="ph-col-12"></div>
                            <div className="ph-col-2"></div>
                            <div className="ph-col-10 empty"></div>
                            <div className="ph-col-8 big"></div>
                            <div className="ph-col-4 big empty"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="ph-item"
                        style={{ background: '#3d3d3f', border: 'none' }}
                      >
                        <div className="ph-col-12">
                          <div className="ph-picture"></div>
                          <div className="ph-row">
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-12"></div>
                          </div>
                        </div>
                        <div className="ph-col-2">
                          <div className="ph-avatar"></div>
                        </div>
                        <div>
                          <div className="ph-row">
                            <div className="ph-col-12"></div>
                            <div className="ph-col-2"></div>
                            <div className="ph-col-10 empty"></div>
                            <div className="ph-col-8 big"></div>
                            <div className="ph-col-4 big empty"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className={'home-section-row ' + this.state.mainDiv}>
                <Col
                  className="p-3 home-col"
                  key={1}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <h1 className="pt-5 pb-5 text-white">Brand</h1>
                </Col>
                {RenderView}
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
