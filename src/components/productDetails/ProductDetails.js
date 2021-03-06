import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, Redirect } from 'react-router-dom';
import SuggestedProduct from './SuggestedProduct';
import ReviewList from './ReviewList';
import RL from './RL';
import cogoToast from 'cogo-toast';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      qtyCounter: 0,
      maxQty: null,
      isSize: null,
      isColor: null,
      color: '',
      size: '',
      addToCart: 'Adaugă',
      pageRefreshStatus: false,
      addToFav: 'Favorite',
      orderNow: 'Comandă acum',
      pageRedirectStauts: false,
    };
  }

  //increase counter
  increaseQty = () => {
    this.setState({ qtyCounter: this.state.qtyCounter + 1 });
  };

  //decrease counter
  decreaseQty = () => {
    if (this.state.qtyCounter > 0) {
      this.setState({ qtyCounter: this.state.qtyCounter - 1 });
    }
  };

  addToFav = () => {
    let ProductAllData = this.props.Data;
    let product_code = ProductAllData['product']?.[0]['product_code'];
    this.setState({ addToFav: 'Se adaugă...' });
    let productCode = product_code;
    let email = this.props.user.email;

    if (!localStorage.getItem('token')) {
      cogoToast.warn('Nu sunteți autentificat!', {
        position: 'top-right',
      });
    } else {
      axios
        .post(AppURL.AddFavourite(productCode, email))
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success('Produsul este acum în favorite!', {
              position: 'top-right',
            });
            this.setState({ addToFav: 'Favorite' });
            this.setState({ pageRefreshStatus: true });
          } else {
            cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
              position: 'top-right',
            });
            this.setState({ addToFav: 'Favorite' });
          }
        })
        .catch((error) => {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          // console.log(error);
          this.setState({ addToFav: 'Favorite' });
        });
    }
  };

  orderNow = () => {
    let ProductAllData = this.props.Data;
    let product_code = ProductAllData['product']?.[0]['product_code'];
    let qty = ProductAllData['productDetails']?.[0]['qty'];
    let isSize = this.state.isSize;
    let isColor = this.state.isColor;
    let color = this.state.color;
    let size = this.state.size;
    let quantity = this.state.qtyCounter;
    let productCode = product_code;
    let email = this.props.user.email;

    if (isColor === 'YES' && color.length === 0) {
      cogoToast.error('Vă rugăm selectați o culoare!', {
        position: 'top-right',
      });
    } else if (isSize === 'YES' && size.length === 0) {
      cogoToast.error('Vă rugăm selectați o mărime!', {
        position: 'top-right',
      });
    } else if (quantity === 0) {
      cogoToast.error('Vă rugăm selectați cantitatea!', {
        position: 'top-right',
      });
    } else if (quantity > qty) {
      cogoToast.error('Nu există atatea produse in stoc!', {
        position: 'top-right',
      });
    } else if (!localStorage.getItem('token')) {
      cogoToast.warn('Nu sunteți autentificat!', {
        position: 'top-right',
      });
    } else {
      this.setState({ orderNow: 'Se adaugă...' });
      let CustomFormData = new FormData();
      CustomFormData.append('color', color);
      CustomFormData.append('size', size);
      CustomFormData.append('quantity', quantity);
      CustomFormData.append('product_code', productCode);
      CustomFormData.append('email', email);

      axios
        .post(AppURL.AddToCart, CustomFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success('Produsul a fost adăugat cu succes!', {
              position: 'top-right',
            });
            this.setState({ orderNow: 'Comandă acum' });
            this.setState({ pageRedirectStauts: true });
          } else {
            cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
              position: 'top-right',
            });
            console.error(response.data);
            this.setState({ orderNow: 'Comandă acum' });
          }
        })
        .catch((error) => {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          console.error(error);
          this.setState({ orderNow: 'Comandă acum' });
        });
    }
  };

  PageRedirect = () => {
    if (this.state.pageRedirectStauts === true) {
      return <Redirect to="/cart" />;
    }
  };

  addToCart = () => {
    let ProductAllData = this.props.Data;
    let product_code = ProductAllData['product']?.[0]['product_code'];
    let qty = ProductAllData['productDetails']?.[0]['qty'];
    let isSize = this.state.isSize;
    let isColor = this.state.isColor;
    let color = this.state.color;
    let size = this.state.size;
    let quantity = this.state.qtyCounter;
    let productCode = product_code;
    let email = this.props.user.email;

    if (isColor === 'YES' && color.length === 0) {
      cogoToast.error('Vă rugăm selectați o culoare!', {
        position: 'top-right',
      });
    } else if (isSize === 'YES' && size.length === 0) {
      cogoToast.error('Vă rugăm selectați o mărime!', {
        position: 'top-right',
      });
    } else if (quantity === 0) {
      cogoToast.error('Vă rugăm selectați cantitatea!', {
        position: 'top-right',
      });
    } else if (quantity > qty) {
      cogoToast.error('Nu există atatea produse in stoc!', {
        position: 'top-right',
      });
    } else if (!localStorage.getItem('token')) {
      cogoToast.warn('Nu sunteți autentificat!', {
        position: 'top-right',
      });
    } else {
      this.setState({ addToCart: 'Se adaugă...' });
      let CustomFormData = new FormData();
      CustomFormData.append('color', color);
      CustomFormData.append('size', size);
      CustomFormData.append('quantity', quantity);
      CustomFormData.append('product_code', productCode);
      CustomFormData.append('email', email);

      axios
        .post(AppURL.AddToCart, CustomFormData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success('Produsul a fost adăugat cu succes!', {
              position: 'top-right',
            });
            this.setState({ addToCart: 'Adaugă' });
            this.setState({ pageRefreshStatus: true });
          } else {
            cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
              position: 'top-right',
            });
            console.error(response.data);
            this.setState({ addToCart: 'Adaugă' });
          }
        })
        .catch((error) => {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          console.error(error);
          this.setState({ addToCart: 'Adaugă' });
        });
    }
  };

  PageRefresh = () => {
    if (this.state.pageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };

  colorOnChange = (event) => {
    let color = event.target.value;
    // alert(color);
    this.setState({ color: color });
  };

  sizeOnChange = (event) => {
    let size = event.target.value;
    // alert(size);
    this.setState({ size: size });
  };

  componentDidMount() {
    const pageColor = document.querySelector('.product-details-page-section');
    const sizes = document.querySelectorAll('.product-details-page-size-size');
    const colors = document.querySelectorAll(
      '.product-details-page-sneaker-color'
    );
    const anotherImages = document.querySelectorAll(
      '.product-details-page-another-image'
    );
    const sneaker = document.querySelectorAll(
      '.product-details-page-sneaker-img'
    );

    function changeSize() {
      sizes.forEach((size) =>
        size.classList.remove('product-details-page-active')
      );
      this.classList.add('product-details-page-active');
    }

    function changeImage() {
      let src = this.getAttribute('src');
      sneaker.forEach((s) => (s.src = src));
    }

    function changeColor() {
      let primary = this.getAttribute('primary');
      colors.forEach((c) => c.classList.remove('product-details-page-active'));
      this.classList.add('product-details-page-active');

      if (primary == '#ffffff') {
        // pageColor.classList.add('bg-primary');
        primary = '#3d3d3f';
      } else {
        // pageColor.classList.remove('bg-primary');
      }
      document.documentElement.style.setProperty('--primary', primary);
    }

    sizes.forEach((size) => size.addEventListener('click', changeSize));
    colors.forEach((c) => c.addEventListener('click', changeColor));
    anotherImages.forEach((i) => i.addEventListener('click', changeImage));

    let ProductAllData = this.props.Data;
    let color = ProductAllData['productDetails']?.[0]['color'];
    let size = ProductAllData['productDetails']?.[0]['size'];
    let product_code = ProductAllData['product']?.[0]['product_code'];

    if (this.state.isSize === null) {
      if (size != '') {
        this.setState({ isSize: 'YES' });
      } else {
        this.setState({ isSize: 'NO' });
      }
    }

    if (this.state.isColor === null) {
      if (color != '') {
        this.setState({ isColor: 'YES' });
      } else {
        this.setState({ isColor: 'NO' });
      }
    }
    // if (this.state.productCode === null) {
    //   this.setState({ productCode: product_code });
    // }
    // console.log('product code-> ' + this.state.productCode);
  }

  PriceOption(price, special_price) {
    if (special_price == '') {
      return (
        <span className="product-details-page-price-title">{price} lei</span>
      );
    } else {
      return (
        <span className="product-details-page-price-title">
          {special_price} lei
        </span>
      );
    }
  }

  render() {
    let ProductAllData = this.props.Data;
    let name = ProductAllData['product']?.[0]['name'];
    let slug = ProductAllData['product']?.[0]['slug'];
    let brand = ProductAllData['product']?.[0]['brand'];
    let category = ProductAllData['product']?.[0]['category'];
    let subcategory = ProductAllData['product']?.[0]['subcategory'];
    let image = ProductAllData['product']?.[0]['image'];
    let price = ProductAllData['product']?.[0]['price'];
    let product_code = ProductAllData['product']?.[0]['product_code'];
    let remark = ProductAllData['product']?.[0]['remark'];
    let special_price = ProductAllData['product']?.[0]['special_price'];
    let star = ProductAllData['product']?.[0]['star'];

    let image_one = ProductAllData['productDetails']?.[0]['image_one'];
    let image_two = ProductAllData['productDetails']?.[0]['image_two'];
    let image_three = ProductAllData['productDetails']?.[0]['image_three'];
    let image_four = ProductAllData['productDetails']?.[0]['image_four'];
    let color = ProductAllData['productDetails']?.[0]['color'];
    let size = ProductAllData['productDetails']?.[0]['size'];
    let qty = ProductAllData['productDetails']?.[0]['qty'];
    let available = ProductAllData['productDetails']?.[0]['available'];
    let product_id = ProductAllData['productDetails']?.[0]['product_id'];
    let short_description =
      ProductAllData['productDetails']?.[0]['short_description'];
    let long_description =
      ProductAllData['productDetails']?.[0]['long_description'];

    let ColorArray = color?.split(',');
    var ColorOption = ColorArray?.map((color, i) => {
      return (
        <option key={i} value={color}>
          {' '}
          {color}{' '}
        </option>
      );
    });

    let SizeArray = size?.split(',');
    var SizeOption = SizeArray?.map((size, i) => {
      return (
        <option key={i} value={size}>
          {' '}
          {size}{' '}
        </option>
      );
    });
    let descriptionArray = long_description?.split(';');
    // let renderDescription = descriptionArray?.map((description, i) => {
    //   return (
    //     <p className="mb-2 a-characterisitc">
    //       {description}
    //       {/* {propName} <span className="text-white">{propValue}</span> */}
    //     </p>
    //   );
    // });
    let availableProduct;
    let availableProductCartConstraintButton;
    let availableProductOrderNowConstraintButton;
    if (qty > 0) {
      if (qty == 1) {
        availableProduct = (
          <span className="badge bg-success">{qty} produs</span>
        );
      } else {
        availableProduct = (
          <span className="badge bg-success">{qty} produse</span>
        );
      }
      availableProductCartConstraintButton = (
        <button
          href="#"
          className="product-details-page-price-button"
          onClick={this.addToCart}
        >
          {this.state.addToCart}
        </button>
      );

      availableProductOrderNowConstraintButton = (
        <button onClick={this.orderNow}>{this.state.orderNow}</button>
      );
    } else {
      availableProduct = <span className="badge bg-danger">0 produse</span>;
      availableProductCartConstraintButton = (
        <button
          href="#"
          className="product-details-page-price-button"
          onClick={this.addToCart}
          disabled
        >
          {this.state.addToCart}
        </button>
      );
      availableProductOrderNowConstraintButton = (
        <button disabled>{this.state.orderNow}</button>
      );
    }
    return (
      <Fragment>
        <section className="product-details-page-section">
          <div className="product-details-page-container">
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
                    <Link to={'/product-category/' + category}>
                      {' '}
                      {category}{' '}
                    </Link>{' '}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    {' '}
                    <Link
                      to={
                        '/product-subcategory/' + category + '/' + subcategory
                      }
                    >
                      {' '}
                      {subcategory}{' '}
                    </Link>{' '}
                  </Breadcrumb.Item>

                  <Breadcrumb.Item>
                    {' '}
                    <Link to={'/product-details/' + product_id}>
                      {' '}
                      {name}{' '}
                    </Link>{' '}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Row>
            <Row className={this.props.LoaderDiv}>
              <Container>
                {' '}
                <div>
                  <div
                    className="ph-item"
                    style={{ background: '#eeeeee', border: 'none' }}
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
                    style={{ background: '#eeeeee', border: 'none' }}
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
            </Row>
            <Row className={'product-details-page-row ' + this.props.MainDiv}>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="product-details-page-column p-0"
              >
                <main className="product-details-page-l-main product-details-page-bd-grid mx-3">
                  <div className="product-details-page-home">
                    <div className="product-details-page-sneaker">
                      <div className="product-details-page-sneaker-figure"></div>

                      <div>
                        <img
                          src={image}
                          alt="main-product"
                          className="product-details-page-sneaker-img product-details-page-shows"
                          color="#fc776e"
                        />
                      </div>
                    </div>

                    <div className="product-details-page-info">
                      <div className="product-details-page-data">
                        <span className="product-details-page-data-subtitle">
                          {brand}
                        </span>
                        <h2 className="product-details-page-data-title">
                          {name}
                        </h2>
                        {availableProduct}

                        <div className="product-details-page-data-another-images">
                          <Col className="p-3" md={12} lg={12} sm={12} xs={12}>
                            <Container className="my-1">
                              <Row>
                                <Col
                                  className="p-2 m-0"
                                  md={3}
                                  lg={3}
                                  sm={6}
                                  xs={6}
                                >
                                  <img
                                    className="w-75 product-details-page-another-image"
                                    src={image_one}
                                    color="#fc776e"
                                  />
                                </Col>
                                <Col
                                  className="p-2 m-0"
                                  md={3}
                                  lg={3}
                                  sm={6}
                                  xs={6}
                                >
                                  <img
                                    className="w-75 product-details-page-another-image"
                                    src={image_two}
                                    color="#fc776e"
                                  />
                                </Col>
                                <Col
                                  className="p-2 m-0"
                                  md={3}
                                  lg={3}
                                  sm={6}
                                  xs={6}
                                >
                                  <img
                                    className="w-75 product-details-page-another-image"
                                    src={image_three}
                                    color="#fc776e"
                                  />
                                </Col>
                                <Col
                                  className="p-2 m-0"
                                  md={3}
                                  lg={3}
                                  sm={6}
                                  xs={6}
                                >
                                  <img
                                    className="w-75 product-details-page-another-image"
                                    src={image_four}
                                    color="#fc776e"
                                  />
                                </Col>
                              </Row>
                            </Container>
                          </Col>
                        </div>
                      </div>
                      <div className="product-details-page-actions">
                        <div className="product-details-page-size">
                          <h3 className="product-details-page-size-title">
                            Mărime
                          </h3>
                          <div className="product-details-page-size-content">
                            <select
                              className="form-select"
                              aria-label="Default select sizes"
                              onChange={this.sizeOnChange}
                            >
                              <option defaultValue>Alege o mărime</option>
                              {SizeOption}
                            </select>
                            {/* <span className="product-details-page-size-size product-details-page-active">
                              8.5
                            </span>
                            <span className="product-details-page-size-size">
                              9
                            </span>
                            <span className="product-details-page-size-size">
                              9.5
                            </span> */}
                          </div>
                        </div>

                        <div className="product-details-page-qty">
                          <h3 className="product-details-page-qty-title">
                            Qty.
                          </h3>
                          <div className="product-details-page-qty-content">
                            <span>
                              <button
                                onClick={this.decreaseQty}
                                className="product-details-page-qty-btn"
                              >
                                -
                              </button>
                            </span>
                            <span>{this.state.qtyCounter}</span>
                            <span>
                              <button
                                onClick={this.increaseQty}
                                className="product-details-page-qty-btn"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="product-details-page-colors-container my-3">
                        <div className="product-details-page-colors">
                          <h3 className="product-details-page-colors-title">
                            Culoare
                          </h3>
                          <div className="product-details-page-colors-content">
                            <select
                              className="form-select"
                              aria-label="Default select colors"
                              onChange={this.colorOnChange}
                            >
                              <option defaultValue>Alege o culoare</option>
                              {ColorOption}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="product-details-page-buttons my-3">
                        {availableProductOrderNowConstraintButton}
                        <button onClick={this.addToFav}>
                          {this.state.addToFav}
                        </button>
                      </div>

                      <div className="product-details-page-price">
                        {this.PriceOption(price, special_price)}
                        {/* <button
                          href="#"
                          className="product-details-page-price-button"
                          onClick={this.addToCart}
                        >
                          {this.state.addToCart}
                        </button> */}
                        {availableProductCartConstraintButton}
                      </div>
                    </div>
                  </div>
                </main>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                <h1 className="px-4 m-0 product-details-page-description-title">
                  descriere.
                </h1>
              </Col>
            </Row>
            <Row
              className={
                'p-4 product-details-page-description-section ' +
                this.props.MainDiv
              }
            >
              <Col className="" md={12} lg={6} sm={12} xs={12}>
                <h4 className="mt-2">CARACTERISTICI</h4>
                <div className="product-details-page-characteristics-section">
                  <p className="mb-2 a-characterisitc">
                    Brand <span className="text-white">{brand}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Tipul tocului{' '}
                    <span className="text-white">{descriptionArray?.[0]} </span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Altele{' '}
                    <span className="text-white">{descriptionArray?.[1]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Tip închidere{' '}
                    <span className="text-white">{descriptionArray?.[2]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Branțuri detașabile{' '}
                    <span className="text-white">{descriptionArray?.[3]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Tipul vârfului{' '}
                    <span className="text-white">{descriptionArray?.[4]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Greutatea pantofului (cea mai mică mărime){' '}
                    <span className="text-white">{descriptionArray?.[5]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Înălțimea totală a pantofului{' '}
                    <span className="text-white">{descriptionArray?.[6]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Grosimea tălpii{' '}
                    <span className="text-white">{descriptionArray?.[7]}</span>
                  </p>
                  <p className="mb-2 a-characterisitc">
                    Code <span className="text-white">{product_code}</span>
                  </p>
                </div>
              </Col>

              <Col className="" md={12} lg={6} sm={12} xs={12}>
                <h4 className="mt-2">REVIEW-URI</h4>
                {/* <ReviewList productCode={product_code} /> */}
                <RL productCode={product_code} />
              </Col>
            </Row>
          </div>
        </section>
        {/* <SuggestedProduct subcategory={subcategory} /> */}
        {this.PageRefresh()}
        {this.PageRedirect()}
      </Fragment>
    );
  }
}

export default ProductDetails;
