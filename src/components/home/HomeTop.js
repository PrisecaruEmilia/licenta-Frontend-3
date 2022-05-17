import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../common/NavMenu';
import AppURL from '../../api/AppUrl';
import axios from 'axios';

import HomeSlider from './HomeSlider';
export class HomeTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderData: [],
    };
  }

  componentDidMount() {
    axios
      .get(AppURL.AllSliderDetails)
      .then((response) => {
        this.setState({ sliderData: response.data });
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
          <HomeSlider data={this.state.sliderData} />
        </Container>
      </Fragment>
    );
  }
}

export default HomeTop;
