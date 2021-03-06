import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
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
      pageRedirectStaus: false,
      confirmBtn: 'Confirmare comandă',
      city: '',
      payment: '',
      name: '',
      address: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    };
  }

  cityOnChange = (event) => {
    let city = event.target.value;
    this.setState({ city: city });
  };

  paymentMethodOnChange = (event) => {
    let payment = event.target.value;
    this.setState({ payment: payment });
  };

  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };

  addressOnChange = (event) => {
    let address = event.target.value;
    this.setState({ address: address });
  };

  confirmOnClick = (event) => {
    event.preventDefault();
    let city = this.state.city;
    let payment = this.state.payment;
    let name = this.state.name;
    let address = this.state.address;
    let email = this.props.user.email;

    if (name.length === 0) {
      cogoToast.error('Vă rugăm completați numele', { position: 'top-right' });
    } else if (city.length === 0) {
      cogoToast.error('Vă rugăm selectați un oraș', { position: 'top-right' });
    } else if (payment.length === 0) {
      cogoToast.error('Vă rugăm selectați o metodă de plată', {
        position: 'top-right',
      });
    } else if (address.length === 0) {
      cogoToast.error('Vă rugăm completați adresa de livrare', {
        position: 'top-right',
      });
    } else {
      let invoice = new Date().getTime();
      let CheckoutFromData = new FormData();
      CheckoutFromData.append('city', city);
      CheckoutFromData.append('payment_method', payment);
      CheckoutFromData.append('name', name);
      CheckoutFromData.append('delivery_address', address);
      CheckoutFromData.append('email', email);
      CheckoutFromData.append('invoice_no', invoice);
      CheckoutFromData.append('delivery_charge', '00');

      axios
        .post(AppURL.CartOrder, CheckoutFromData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success('Comanda a fost plasată', {
              position: 'top-right',
            });
            this.setState({ pageRedirectStaus: true });
            console.log(response.data);
          } else {
            cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
              position: 'top-right',
            });
            console.log(response);
          }
        })
        .catch((error) => {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          console.log('Eroare ' + error.message);
        });
    }
  };

  PageRedirect = () => {
    if (this.state.pageRedirectStaus === true) {
      return <Redirect to="/order-list" />;
    }
  };

  componentDidMount() {
    axios
      .get(AppURL.CartList(this.props.user.email))
      .then((response) => {
        this.setState({
          productData: response.data,
          loaderDiv: 'd-none',
          mainDiv: '',
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

  ItemPlus = (id, quantity, price, max_quantity) => {
    if (quantity < max_quantity) {
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
    } else {
      cogoToast.warn(
        `Nu există atâtea produse - disponibile: ${max_quantity}`,
        {
          position: 'top-right',
        }
      );
      console.log(max_quantity);
    }
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
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }
    const DataList = this.state.productData;
    const totalProducts = DataList.length;
    let totalPriceSum = 0;
    let RenderView;
    if (DataList.length > 0) {
      RenderView = DataList.map((ProductList, i) => {
        totalPriceSum = totalPriceSum + parseFloat(ProductList.total_price);
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
                        MĂRIME {ProductList.size}
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
                            ProductList.unit_price,
                            ProductList.max_quantity
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
                        PREȚ
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
        <h1 className="text-center text-white">Nu ai produse în cărucior</h1>
      );
    }

    let FormCheckout;
    if (DataList.length > 0) {
      FormCheckout = (
        <Row>
          <Container>
            <Row className="cart-page-form-checkout-row">
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="cart-section-subtotal-row py-3">
                  <div className="text-white">
                    <h5>SUBTOTAL: {totalPriceSum} Lei</h5>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <Form
                  onSubmit={this.confirmOnClick}
                  className="cart-page-form-checkout py-3"
                >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="text-white">Nume</Form.Label>
                    <Form.Control onChange={this.nameOnChange} type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label className="text-white">Oraș</Form.Label>
                    <Form.Select onChange={this.cityOnChange}>
                      <option value="">Alege</option>
                      <option value="Oradea">Oradea</option>
                      <option value="Brașov">Brașov</option>
                      <option value="Iași">Iași</option>
                      <option value="Sibiu">Sibiu</option>
                      <option value="București">București</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicMethodPayment"
                  >
                    <Form.Label className="text-white">
                      Metoda de plată
                    </Form.Label>
                    <Form.Select onChange={this.paymentMethodOnChange}>
                      <option value="">Alege</option>
                      <option value="cash_on_delivery">Cash</option>
                      <option disabled value="card_stripe">
                        Stripe
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label className="text-white">
                      Adresa de livrare
                    </Form.Label>
                    <Form.Control
                      onChange={this.addressOnChange}
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                  <Button
                    className="cart-page-form-checkout-submit-btn"
                    type="submit"
                  >
                    {this.state.confirmBtn}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Row>
      );
    }

    return (
      <section className="cart-page-section">
        <Container className="cart-page-container">
          <Row className="cart-section-row p-2 mx-2">
            <div className="text-white my-5">
              <h1>Căruciorul Tău.</h1>
            </div>
          </Row>
          <Row>
            {' '}
            <div className={this.state.loaderDiv}>
              <div
                className="ph-item"
                style={{ backgroundColor: '#38383a', border: 'none' }}
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
                style={{ backgroundColor: '#38383a', border: 'none' }}
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
          </Row>
          <div className={this.state.mainDiv}>
            <Row className="p-2 mx-2">
              <div className="cart-section-subtotal-row">
                <div className="text-white">
                  <h3>Total produse: {totalProducts}</h3>
                </div>
                <div className="text-white">
                  <h5>SUBTOTAL: {totalPriceSum} Lei</h5>
                </div>
              </div>
            </Row>
            <Row className="p-2 mx-2">{RenderView}</Row>
            {FormCheckout}
          </div>
        </Container>
        {this.PageRefresh()}
        {this.PageRedirect()}
      </section>
    );
  }
}

export default Cart;
