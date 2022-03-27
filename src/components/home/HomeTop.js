import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../common/NavMenu';

import HomeSlider from './HomeSlider';
export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <header className="home-header-header">
            <NavMenu />
          </header>
          <HomeSlider />
        </Container>
      </Fragment>
    );
  }
}

export default HomeTop;
