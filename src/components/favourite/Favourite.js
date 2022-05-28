import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shoe_1 from '../../assets/images/shoe_1.png';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }
  componentDidMount() {
    axios
      .get(AppURL.FavouriteList(this.props.user.email))
      .then((response) => {
        this.setState({
          productData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const FavList = this.state.productData;
    const RenderView = FavList.map((ProductList, i) => {
      return (
        <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={12} xs={12}>
          <Link to={'/product-details/' + ProductList.product_id}>
            <Card className="image-box home-card favourite-card">
              <div className="top-card">
                <p className="card-shoe-category">{ProductList.subcategory}</p>
              </div>

              <img
                className="img-center"
                src={ProductList.image}
                alt={ProductList.subcategory}
              ></img>
              <Card.Body>
                <p className="product-name-on-card">
                  {ProductList.product_name}
                </p>
                <div className="text-center">
                  <button className="btn btn-remove-favourite-item">
                    <i className="fa fa-trash-alt"></i> Remove
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <section className="favourite-page-section">
        <section className="favourite-page-container">
          <Row className="favourite-section-row">
            <Col
              className="p-3"
              key={1}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <h1 className="pt-5 pb-5 text-center text-white">
                Favourite Items
              </h1>
            </Col>
          </Row>
          <Row className="favourite-section-row favourite-section-row-items">
            {RenderView}
            {/* <Col className="p-3" key={1} xl={3} lg={4} md={6} sm={12} xs={12}>
              <Link to="/product-details">
                <Card className="image-box home-card favourite-card">
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
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                    <div className="text-center">
                      <button className="btn btn-remove-favourite-item">
                        <i className="fa fa-trash-alt"></i> Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-3" key={1} xl={3} lg={4} md={6} sm={12} xs={12}>
              <Link to="/product-details">
                <Card className="image-box home-card favourite-card">
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
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                    <div className="text-center">
                      <button className="btn btn-remove-favourite-item">
                        <i className="fa fa-trash-alt"></i> Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-3" key={1} xl={3} lg={4} md={6} sm={12} xs={12}>
              <Link to="/product-details">
                <Card className="image-box home-card favourite-card">
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
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                    <div className="text-center">
                      <button className="btn btn-remove-favourite-item">
                        <i className="fa fa-trash-alt"></i> Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-3" key={1} xl={3} lg={4} md={6} sm={12} xs={12}>
              <Link to="/product-details">
                <Card className="image-box home-card favourite-card">
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
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                    <div className="text-center">
                      <button className="btn btn-remove-favourite-item">
                        <i className="fa fa-trash-alt"></i> Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-3" key={1} xl={3} lg={4} md={6} sm={12} xs={12}>
              <Link to="/product-details">
                <Card className="image-box home-card favourite-card">
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
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                    <div className="text-center">
                      <button className="btn btn-remove-favourite-item">
                        <i className="fa fa-trash-alt"></i> Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-3" key={1} xl={3} lg={4} md={6} sm={12} xs={12}>
              <Link to="/product-details">
                <Card className="image-box home-card favourite-card">
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
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                    <div className="text-center">
                      <button className="btn btn-remove-favourite-item">
                        <i className="fa fa-trash-alt"></i> Remove
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col> */}
          </Row>
        </section>
      </section>
    );
  }
}

export default Favourite;
