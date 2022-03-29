import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import HomeTop from '../components/home/HomeTop';
export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
        <Categories />
      </Fragment>
    );
  }
}

export default HomePage;
