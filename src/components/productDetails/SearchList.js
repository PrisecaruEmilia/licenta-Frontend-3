import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class SearchList extends Component {
  render() {
    const ProductDataList = this.props.ProductData;
    const SearchKey = this.props.SearchKey;
    let isNew;
    let classConstraintForNew;
    const RenderView = ProductDataList.map((ProductList, i) => {
      if (ProductList.remark == 'new') {
        isNew = 'NEW';
        classConstraintForNew = 'card-tag';
      } else {
        isNew = '';
        classConstraintForNew = '';
      }
      if (ProductList.special_price == '') {
        return (
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={12} xs={12}>
            <Link to={'/product-details/' + ProductList.id}>
              <Card className="image-box home-card search-list-card">
                <div className="top-card">
                  <p className="card-shoe-category">
                    {ProductList.subcategory}
                  </p>
                  <p className={classConstraintForNew}>{isNew}</p>
                </div>

                <img
                  className="img-center"
                  src={ProductList.image}
                  alt={ProductList.name}
                ></img>
                <Card.Body>
                  <p className="product-name-on-card">{ProductList.name}</p>
                  <p className="product-price-on-card">
                    Preț : {ProductList.price} lei
                  </p>
                  <div className="text-center">
                    <button className="btn btn-see-product-by-search-list-item">
                      Vezi produs
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={12} xs={12}>
            <Link to={'/product-details/' + ProductList.id}>
              <Card className="image-box home-card search-list-card">
                <div className="top-card">
                  <p className="card-shoe-category">
                    {ProductList.subcategory}
                  </p>
                  <p className={classConstraintForNew}>{isNew}</p>
                </div>

                <img
                  className="img-center"
                  src={ProductList.image}
                  alt={ProductList.name}
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
                  <div className="text-center">
                    <button className="btn btn-see-product-by-search-list-item">
                      Vezi produs
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <section className="search-list-page-section">
          <section className="search-list-page-container">
            <Row className="px-2 py-4 mx-2">
              {' '}
              <div className="breadcrumb-bread-body-search-list">
                <Breadcrumb>
                  <Breadcrumb.Item>
                    {' '}
                    <Link to="/"> Home </Link>{' '}
                  </Breadcrumb.Item>

                  <Breadcrumb.Item>
                    {' '}
                    <Link to={'/product-by-search/' + SearchKey}>
                      {' '}
                      Căutare după : {SearchKey}{' '}
                    </Link>{' '}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Row>
            <Container className="text-center" fluid={true}>
              <div className="text-center my-5">
                <h2> {SearchKey} </h2>
              </div>
            </Container>
            <Container>
              <div className={this.props.LoaderDiv}>
                <div
                  className="ph-item"
                  style={{ background: '#38383a', border: 'none' }}
                >
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="ph-item"
                  style={{ background: '#38383a', border: 'none' }}
                >
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Row
              className={
                'search-list-section-row search-list-section-row-items ' +
                this.props.MainDiv
              }
            >
              {RenderView}
            </Row>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default SearchList;
