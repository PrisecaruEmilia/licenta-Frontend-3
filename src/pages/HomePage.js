import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
      </Fragment>
    );
  }
}

export default HomePage;
