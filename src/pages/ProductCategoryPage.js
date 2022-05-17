import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
import Category from '../components/productDetails/Category';
import AppURL from '../api/AppUrl';
import axios from 'axios';
export class ProductCategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      category: match.params.category,
      productData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductListByCategory(this.state.category))
      .then((response) => {
        this.setState({ productData: response.data });
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
          <Category
            Category={this.state.category}
            ProductData={this.state.productData}
          />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductCategoryPage;