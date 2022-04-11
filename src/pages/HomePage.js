import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import Populars from '../components/home/Populars';
import Footer from '../components/common/Footer';
export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
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
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
