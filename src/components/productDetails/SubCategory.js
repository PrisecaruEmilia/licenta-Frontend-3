import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={6} xs={12}>
            {' '}
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
          </Col>
        );
      } else {
        return (
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={6} xs={12}>
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
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <section className="subcategory-page-section">
          <div className="subcategory-page-container">
            <Container className="text-center" fluid={true}>
              <div className="text-center my-5">
                <h2>
                  {' '}
                  {Category} / {SubCategory}{' '}
                </h2>
              </div>
            </Container>
            <Container fluid={true} className="p-4">
              <Row className="subcategory-page-row">
                <Col
                  className="border border-primary"
                  lg={3}
                  md={4}
                  sm={12}
                  xs={12}
                >
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
                </Col>
                <Col
                  className="border border-danger"
                  lg={9}
                  md={8}
                  sm={12}
                  xs={12}
                >
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
