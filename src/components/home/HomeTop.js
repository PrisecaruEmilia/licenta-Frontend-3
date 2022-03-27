import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../common/NavMenu';
import HomeSlider from './HomeSlider';
export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <NavMenu />
          <HomeSlider />
        </Container>
      </Fragment>
    );
  }
}

export default HomeTop;
