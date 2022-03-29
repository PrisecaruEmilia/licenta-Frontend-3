import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        {/* this will be the slider with popular products */}
        <Categories />
        {/* banner */}
        {/* reviews */}
        {/* footer */}
      </Fragment>
    );
  }
}

export default HomePage;
