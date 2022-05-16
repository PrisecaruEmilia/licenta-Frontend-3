import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import HomeTop from '../components/home/HomeTop';
import Populars from '../components/home/Populars';
import Footer from '../components/common/Footer';
import AppUrl from '../api/AppUrl';
import axios from 'axios';
export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.getVisitorDetails();
  }
  getVisitorDetails = () => {
    axios
      .get(AppUrl.VisitorDetails)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
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
