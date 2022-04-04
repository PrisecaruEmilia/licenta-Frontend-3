import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
import logo from '../../assets/images/shoe_4.png';
import { Button } from 'react-bootstrap';
export class NavMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-xl home-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fa fa-home" aria-hidden="true"></i>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catalog
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/" className="dropdown-item">
                      Addidas
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Vans
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Nike
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Velcro
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Sneakers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownProfile"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownProfile"
                >
                  <li>
                    <Link to="/" className="dropdown-item">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="desktop-search">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-search" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="btn">
                  <i className="fa h4 fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="btn">
                  <i className="fa h4 fa-mobile-alt"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Button className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> 3 Items
                </Button>
              </li>
            </ul>
            <div className="mobile-search">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-search" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavMenu;
