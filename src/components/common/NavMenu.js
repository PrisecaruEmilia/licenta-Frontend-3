import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/images/shoe_4.png';
import { Button } from 'react-bootstrap';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class NavMenu extends Component {
  constructor() {
    super();
    this.state = {
      categoriesData: [],
      searchKey: '',
      searchRedirectStauts: false,
    };
    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SeachOnClick = this.SeachOnClick.bind(this);
    this.searchRedirect = this.SearchRedirect.bind(this);
  }

  SearchOnChange(event) {
    let key = event.target.value;
    // alert(key);
    this.setState({ searchKey: key });
  }

  SeachOnClick() {
    if (this.state.searchKey.length >= 2) {
      this.setState({ searchRedirectStauts: true });
    }
  }
  SearchRedirect() {
    if (this.state.searchRedirectStauts === true) {
      return <Redirect to={'/product-by-search/' + this.state.searchkey} />;
    }
  }
  componentDidMount() {
    axios
      .get(AppURL.AllCategoryDetails)
      .then((response) => {
        this.setState({ categoriesData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const categoryList = this.state.categoriesData;
    const RenderView = categoryList.map((categoryList, i) => {
      return (
        <li key={i.toString()}>
          <Link to="/" className="dropdown-item">
            {categoryList.category_name}
          </Link>
        </li>
      );
    });
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
                  {RenderView}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      Toate
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
                    <Link to="/login" className="dropdown-item">
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
                  onChange={this.SearchOnChange}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  onClick={this.SeachOnClick}
                  className="btn btn-search"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/favourite" className="btn">
                  <i className="fa h4 fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">3</span>
                  </sup>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/notification" className="btn">
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
                  <Link to="/cart" className="text-white">
                    <i className="fa fa-shopping-cart"></i> 3 Items
                  </Link>
                </Button>
              </li>
            </ul>
            <div className="mobile-search">
              <form className="d-flex">
                <input
                  onChange={this.SearchOnChange}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  onClick={this.SeachOnClick}
                  className="btn btn-search"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          {this.SearchRedirect()}
        </div>
      </nav>
    );
  }
}

export default NavMenu;
