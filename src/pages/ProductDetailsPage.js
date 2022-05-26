import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
import ProductDetails from '../components/productDetails/ProductDetails';
import SuggestedProduct from '../components/productDetails/SuggestedProduct';
import AppURL from '../api/AppUrl';
import axios from 'axios';
import SPT from '../components/productDetails/SPT';
export class ProductDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      id: match.params.id,
      productData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductDetails(this.state.id))
      .then((response) => {
        this.setState({
          productData: response.data,
        });
        console.log(this.state.productData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <header className="home-header-header">
            <NavMenu />
          </header>
          <ProductDetails Data={this.state.productData} />
          {/* <SuggestedProduct Data={this.state.productData} /> */}
          <SPT Data={this.state.productData} />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductDetailsPage;
