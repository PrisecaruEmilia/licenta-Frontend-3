import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import shoe_1 from '../../assets/images/shoe_1.png';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import cogoToast from 'cogo-toast';
export class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      pageRefreshStatus: false,
      loaderDiv: '',
      mainDiv: 'd-none',
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.FavouriteList(this.props.user.email))
      .then((response) => {
        this.setState({
          productData: response.data,
          loaderDiv: 'd-none',
          mainDiv: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  removeItem = (event) => {
    let product_code = event.target.getAttribute('data-code');
    let email = this.props.user.email;

    axios
      .get(AppURL.FavouriteRemove(product_code, email))
      .then((response) => {
        cogoToast.success('Produsul s-a eliminat cu succes', {
          position: 'top-right',
        });
        this.setState({ pageRefreshStatus: true });
      })
      .catch((error) => {
        cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
          position: 'top-right',
        });
      });
  }; // end Remove Item Mehtod

  PageRefresh = () => {
    if (this.state.pageRefreshStatus === true) {
      let URL = window.location;
      return <Redirect to={URL} />;
    }
  };
  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }
    const FavList = this.state.productData;
    if (FavList.length > 0) {
      const RenderView = FavList.map((ProductList, i) => {
        return (
          <Col className="p-3" key={i} xl={3} lg={4} md={6} sm={12} xs={12}>
            <Card className="image-box home-card favourite-card">
              <div className="top-card">
                <p className="card-shoe-category">{ProductList.subcategory}</p>
              </div>
              <Link to={'/product-details/' + ProductList.product_id}>
                <img
                  className="img-center"
                  src={ProductList.image}
                  alt={ProductList.subcategory}
                ></img>
              </Link>
              <Card.Body>
                <p className="product-name-on-card">
                  {ProductList.product_name}
                </p>
                <div className="text-center">
                  <button
                    onClick={this.removeItem}
                    data-code={ProductList.product_code}
                    className="btn btn-remove-favourite-item"
                  >
                    <i className="fa fa-trash-alt"></i> Șterge
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      });
      return (
        <section className="favourite-page-section">
          <section className="favourite-page-container">
            <Container className="mt-5">
              {' '}
              <div className={this.state.loaderDiv}>
                <div
                  className="ph-item"
                  style={{ background: '#38383a', border: 'none' }}
                >
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="ph-item"
                  style={{ background: '#38383a', border: 'none' }}
                >
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Row className={'favourite-section-row ' + this.state.mainDiv}>
              <Col
                className="p-3"
                key={1}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <h1 className="pt-5 pb-5 text-center text-white">
                  Produse favorite
                </h1>
              </Col>
            </Row>
            <Row className="favourite-section-row favourite-section-row-items">
              {RenderView}
            </Row>
          </section>
          {this.PageRefresh()}
        </section>
      );
    } else {
      return (
        <section className="favourite-page-section">
          <section className="favourite-page-container">
            <Container className="mt-5">
              {' '}
              <div className={this.state.loaderDiv}>
                <div
                  className="ph-item"
                  style={{ background: '#38383a', border: 'none' }}
                >
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="ph-item"
                  style={{ background: '#38383a', border: 'none' }}
                >
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Row className={'favourite-section-row ' + this.state.mainDiv}>
              <Col
                className="p-3"
                key={1}
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <h1 className="pt-5 pb-5 text-center text-white">
                  Nu există produse favorite
                </h1>
              </Col>
            </Row>
          </section>
          {this.PageRefresh()}
        </section>
      );
    }
  }
}

export default Favourite;
