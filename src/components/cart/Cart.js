import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import { Redirect } from 'react-router-dom';
export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      pageRefreshStatus: false,
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.CartList(this.props.user.email))
      .then((response) => {
        this.setState({
          productData: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  removeItem = (id) => {
    axios
      .get(AppURL.RemoveCartList(id))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success('Produsul s-a eliminat cu succes', {
            position: 'top-right',
          });
          this.setState({ pageRefreshStatus: true });
        } else {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
        }
      })
      .catch((error) => {
        cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
          position: 'top-right',
        });
      });
  }; // End Remove Item Mehtod

  PageRefresh = () => {
    if (this.state.pageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };

  ItemPlus = (id, quantity, price) => {
    axios
      .get(AppURL.CartItemPlus(id, quantity, price))
      .then((response) => {
        if (response.data === 1) {
          cogoToast.success('Item Quantity Increased', {
            position: 'top-right',
          });
          this.setState({ pageRefreshStatus: true });
        } else {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          // console.error(response.data);
        }
      })
      .catch((error) => {
        cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
          position: 'top-right',
        });
        // console.error(error);
      });
  };

  ItemMinus = (id, quantity, price) => {
    if (quantity != 0) {
      axios
        .get(AppURL.CartItemMinus(id, quantity, price))
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success('Item Quantity Decreased', {
              position: 'top-right',
            });
            this.setState({ pageRefreshStatus: true });
          } else {
            cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
              position: 'top-right',
            });
            // console.error(response.data);
          }
        })
        .catch((error) => {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          // console.error(error);
        });
    } else {
      cogoToast.warn('Produsul are cantitatea 0, acesta a fost sters', {
        position: 'top-right',
      });
      this.removeItem(id);
    }
  };
  render() {
    const DataList = this.state.productData;
    const totalProducts = DataList.length;
    let RenderView;
    if (DataList.length > 0) {
      RenderView = DataList.map((ProductList, i) => {
        return (
          <Col className="p-1 my-2" key={i} lg={12} md={12} sm={12} xs={12}>
            <Card className="cart-page-item-on-cart">
              <Card.Body>
                <Row>
                  <Col
                    md={3}
                    lg={3}
                    sm={12}
                    xs={12}
                    className="cart-page-item-col-section-mini"
                  >
                    <div className="image-box home-card cart-card">
                      <img
                        className="img-center"
                        src={ProductList.product_image}
                        alt={ProductList.product_name}
                      ></img>
                    </div>
                  </Col>
                  <Col
                    md={4}
                    lg={4}
                    sm={12}
                    xs={12}
                    className="cart-page-item-product-details cart-page-item-col-section-mini"
                  >
                    <div className="cart-page-item-product-item-on-card text-center">
                      <h5>{ProductList.product_name}</h5>
                    </div>
                    <div className="cart-page-item-product-item-on-card text-center">
                      <h6>{ProductList.color}</h6>
                    </div>
                    <div className="cart-page-item-product-item-on-card text-center">
                      <h6 className="cart-page-item-product-item-faded-color">
                        SIZE {ProductList.size}
                      </h6>
                    </div>
                  </Col>

                  <Col
                    md={3}
                    lg={3}
                    sm={12}
                    xs={12}
                    className="cart-page-item-product-details-qty cart-page-item-col-section-mini"
                  >
                    <div className="cart-page-item-product-item-on-card cart-page-item-product-qty">
                      <Button
                        onClick={() =>
                          this.ItemPlus(
                            ProductList.id,
                            ProductList.quantity,
                            ProductList.unit_price
                          )
                        }
                        className="cart-page-item-product-qty-plus-sign"
                      >
                        +
                      </Button>
                      <span className="cart-page-item-product-qty-value">
                        {ProductList.quantity}
                      </span>
                      <Button
                        onClick={() =>
                          this.ItemMinus(
                            ProductList.id,
                            ProductList.quantity,
                            ProductList.unit_price
                          )
                        }
                        className="cart-page-item-product-qty-minus-sign"
                      >
                        -
                      </Button>
                    </div>
                  </Col>
                  <Col
                    md={2}
                    lg={2}
                    sm={12}
                    xs={12}
                    className="cart-page-item-product-details text-center cart-page-item-col-section-mini"
                  >
                    <div className="cart-page-item-product-item-on-card">
                      <span className="cart-page-item-product-item-faded-color">
                        PRICING
                      </span>{' '}
                      {ProductList.total_price} LEI
                    </div>
                    <Button
                      onClick={() => this.removeItem(ProductList.id)}
                      className="cart-page-item-product-item-on-card cart-page-item-product-item-remove"
                    >
                      <i className="fa fa-trash-alt"></i>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        );
      });
    } else {
      RenderView = (
        <h1 className="text-center text-white">
          You dont have any products in cart
        </h1>
      );
    }

    return (
      <section className="cart-page-section">
        <Container className="cart-page-container">
          <Row className="cart-section-row p-2 mx-2">
            <div className="text-white my-5">
              <h1>Your shopping cart.</h1>
            </div>
          </Row>
          <Row className="p-2 mx-2">{RenderView}</Row>
          <Row className="p-2 mx-2">
            <div className="cart-section-subtotal-row">
              <div className="text-white">
                <h3>Total products: {totalProducts}</h3>
              </div>
              <div className="text-white">
                <h5>SUBTOTAL: 480 Lei</h5>
              </div>
            </div>
          </Row>
        </Container>
        {this.PageRefresh()}
      </section>
    );
  }
}

export default Cart;
