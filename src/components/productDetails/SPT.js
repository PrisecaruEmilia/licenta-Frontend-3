import React, { Component, Fragment, useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SPT(props) {
  const [productData, setProductData] = useState([]);
  //   const [fetchAgain, setFetchAgain] = useState(true);
  const sendGetRequest = async () => {
    try {
      let data = props.Data;
      let subcategory = data['product']?.[0]['subcategory'];
      const response = await axios.get(AppURL.SimilarProduct(subcategory));
      setProductData(response.data);
      console.log('How many products are releated? -> ', response.data);
    } catch (error) {
      // Handle Error Here
      console.error('Error in suggested product ', error);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, [productData]);

  //   useEffect(() => {
  //     if (fetchAgain) {
  //       setFetchAgain(false);
  //       sendGetRequest();
  //     }
  //   }, [fetchAgain]);

  const DataList = productData;
  let classConstraint;
  let subcategoryUpper;
  let isNew;
  let classConstraintForNew;
  if (DataList?.length > 0) {
    const RenderView = DataList?.map((ProductList, i) => {
      if (i % 2 != 0) {
        classConstraint = 'suggested-product-card';
      } else if (i % 2 == 0) {
        classConstraint = 'suggested-product-card-even';
      }
      if (ProductList.remark == 'new') {
        isNew = 'NEW';
        classConstraintForNew = 'card-tag';
      } else {
        isNew = '';
        classConstraintForNew = '';
      }
      subcategoryUpper = ProductList.subcategory.toUpperCase();
      if (ProductList.special_price == '') {
        return (
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={6} xs={12}>
            {' '}
            <Link to={'/product-details/' + ProductList.id}>
              <Card
                className={
                  'image-box home-card category-page-product-card ' +
                  classConstraint
                }
              >
                <div className="top-card">
                  <p className="card-shoe-category">{subcategoryUpper}</p>
                  <p className={classConstraintForNew}>{isNew}</p>
                </div>

                <img
                  className="img-center"
                  src={ProductList.image}
                  alt={ProductList.subcategory}
                ></img>
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.name}</p>
                  <p className="product-price-on-card">
                    Preț : {ProductList.price} lei
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={6} xs={12}>
            <Link to={'/product-details/' + ProductList.id}>
              <Card
                className={
                  'image-box home-card category-page-product-card ' +
                  classConstraint
                }
              >
                <div className="top-card">
                  <p className="card-shoe-category">{subcategoryUpper}</p>
                  <p className={classConstraintForNew}>{isNew}</p>
                </div>

                <img
                  className="img-center"
                  src={ProductList.image}
                  alt={ProductList.subcategory}
                ></img>
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.name}</p>
                  <p className="product-price-on-card">
                    Preț :{' '}
                    <strike className="text-secondary">
                      {ProductList.price}
                    </strike>{' '}
                    {ProductList.special_price} lei
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
        <Container className="suggested-product-section">
          <Row>
            <div className="text-white mb-55 text-center">
              <h1>Produse similare</h1>
            </div>
          </Row>
          <Row>{RenderView}</Row>
        </Container>
      </Fragment>
    );
  } else if (productData.length == 0) {
    return (
      <Fragment>
        <Container className="suggested-product-section">
          <Row>
            <div className="text-white my-5 text-center">
              <h1>Loading...</h1>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Container className="suggested-product-section">
          <Row>
            <div className="text-white my-5 text-center">
              <h1>Nu există produse similare</h1>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SPT;
