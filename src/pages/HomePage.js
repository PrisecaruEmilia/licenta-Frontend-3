import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import Populars from '../components/home/Populars';
export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Populars />
        <Categories />
        {/* banner */}
        {/* reviews */}
        {/* footer */}
      </Fragment>
    );
  }
}

export default HomePage;
