import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
import Cart from '../components/cart/Cart';

export class CartPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <header className="home-header-header">
            <NavMenu />
          </header>
          <Cart user={User} />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default CartPage;
