import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
class SubCategory extends Component {
  render() {
    const ProductList = this.props.ProductData;
    const Category = this.props.Category;
    const SubCategory = this.props.SubCategory;

    let classConstraint;
    let subcategoryUpper;
    let isNew;
    let classConstraintForNew;
    const renderView = ProductList.map((ProductList, i) => {
      if (i % 2 != 0) {
        classConstraint = 'new-arrivals-card';
      } else if (i % 2 == 0) {
        classConstraint = 'new-arrivals-card-even';
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
          <Col className="p-3" key={i} xl={3} lg={3} md={6} sm={6} xs={12}>
            {' '}
            <Link to={'/product-details/' + ProductList.id}>
              <Card
                className={
                  'image-box home-card subcategory-page-product-card ' +
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
          <Col className="p-3" key={i} xl={3} lg={3} md={6} sm={6} xs={12}>
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
        <section className="subcategory-page-section">
          <div className="subcategory-page-container">
            <Container>
              <Row className="px-2 py-4 mx-2">
                {' '}
                <div className="breadcrumb-bread-body">
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      {' '}
                      <Link to="/"> Home </Link>{' '}
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>
                      {' '}
                      <Link to={'/product-category/' + Category}>
                        {' '}
                        {Category}{' '}
                      </Link>{' '}
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>
                      {' '}
                      <Link
                        to={
                          '/product-subcategory/' + Category + '/' + SubCategory
                        }
                      >
                        {' '}
                        {SubCategory}{' '}
                      </Link>{' '}
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </Row>
            </Container>
            <Container className="text-center" fluid={true}>
              <div className="text-center my-5">
                <h2>
                  {' '}
                  {Category} / {SubCategory}{' '}
                </h2>
              </div>
            </Container>
            <Container>
              <div className={this.props.LoaderDiv}>
                <div className="ph-item">
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

                <div className="ph-item">
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
            <Container fluid={true} className={'p-4 ' + this.props.MainDiv}>
              <Row className="subcategory-page-row">
                {/* <Col lg={3} md={4} sm={12} xs={12}>
                  <Row className="subcategory-page-row">
                    <Col lg={12} md={12} sm={12} xs={12}>
                      {' '}
                      <div className="text-center my-5">
                        <h2> Filtre </h2>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="text-center"
                    >
                      <Card className="subcategory-page-filter-card">
                        <Card.Body>
                          <Card.Title>Filtrează produsele</Card.Title>
                          <Card.Text>Culori</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col> */}
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row className="subcategory-page-row">{renderView}</Row>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default SubCategory;
