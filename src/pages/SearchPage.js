import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
import AppURL from '../api/AppUrl';
import axios from 'axios';
import SearchList from '../components/productDetails/SearchList';

class SearchPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      SearchKey: match.params.searchKey,
      ProductData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductBySearch(this.state.SearchKey))
      .then((response) => {
        this.setState({ ProductData: response.data });
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
          <SearchList
            SearchKey={this.state.SearchKey}
            ProductData={this.state.ProductData}
          />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default SearchPage;
