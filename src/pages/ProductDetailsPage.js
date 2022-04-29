import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
import ProductDetails from '../components/productDetails/ProductDetails';
import SuggestedProduct from '../components/productDetails/SuggestedProduct';
export class ProductDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <header className="home-header-header">
            <NavMenu />
          </header>
          <ProductDetails />
          <SuggestedProduct />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductDetailsPage;
