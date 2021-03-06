import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';
import NavMenu from '../components/common/NavMenu';
// import UserLogin from '../components/common/UserLogin';
import Login from '../components/common/Login';

export class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const setUser = this.props.setUser;
    const user = this.props.user;
    return (
      <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
          <header className="home-header-header">
            <NavMenu />
          </header>
          <Login setUser={setUser} user={user} />
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default UserLoginPage;
