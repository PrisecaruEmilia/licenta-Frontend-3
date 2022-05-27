import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import SuggestedProduct from './SuggestedProduct';
import ReviewList from './ReviewList';
import RL from './RL';
export class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      qtyCounter: 0,
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
            <Row className="product-details-page-row">
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
                        {/* <div className="product-details-page-color">
                          <h3 className="product-details-page-color-title">
                            Color
                          </h3>
                          <div className="product-details-page-color-content">
                            <div className="product-details-page-sneaker-colors">
                              <span
                                className="product-details-page-sneaker-color product-details-page-sneaker-colors-one product-details-page-active"
                                primary="#fc776e"
                                color="#fc776e"
                              ></span>
                              <span
                                className="product-details-page-sneaker-color product-details-page-sneaker-colors-two"
                                primary="#111111"
                                color="#111111"
                              ></span>
                              <span
                                className="product-details-page-sneaker-color product-details-page-sneaker-colors-three"
                                primary="#ffffff"
                                color="#ffffff"
                              ></span>
                            </div>
                          </div>
                        </div> */}
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
                            >
                              <option defaultValue>Alege o culoare</option>
                              {ColorOption}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="product-details-page-buttons my-3">
                        <button>Order Now</button>
                        <button>Favorites</button>
                      </div>

                      <div className="product-details-page-price">
                        {this.PriceOption(price, special_price)}
                        <a
                          href="#"
                          className="product-details-page-price-button"
                        >
                          ADD TO CART
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                <h1 className="px-4 m-0 product-details-page-description-title">
                  description.
                </h1>
              </Col>
            </Row>
            <Row className="p-4 product-details-page-description-section">
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
                <h4 className="mt-2">REVIEWS</h4>
                {/* <ReviewList productCode={product_code} /> */}
                <RL productCode={product_code} />
              </Col>
            </Row>
          </div>
        </section>
        {/* <SuggestedProduct subcategory={subcategory} /> */}
      </Fragment>
    );
  }
}

export default ProductDetails;
