import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
import SubCategory from '../components/productDetails/SubCategory';
import AppURL from '../api/AppUrl';
import axios from 'axios';
export class ProductSubCategoryPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      category: match.params.category,
      subCategory: match.params.subcategory,
      productData: [],
      loaderDiv: '',
      mainDiv: 'd-none',
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(
        AppURL.ProductListBySubCategory(
          this.state.category,
          this.state.subCategory
        )
      )
      .then((response) => {
        this.setState({
          productData: response.data,
          loaderDiv: 'd-none',
          mainDiv: '',
        });
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
          <SubCategory
            Category={this.state.category}
            SubCategory={this.state.subCategory}
            ProductData={this.state.productData}
            LoaderDiv={this.state.loaderDiv}
            MainDiv={this.state.mainDiv}
          />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default ProductSubCategoryPage;
