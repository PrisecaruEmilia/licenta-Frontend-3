import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  componentDidMount() {
    axios
      .get(AppURL.ProductListByRemark('new'))
      .then((response) => {
        this.setState({ productData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const NewList = this.state.productData;
    let classConstraint;
    let subcategoryUpper;
    const RenderView = NewList.map((NewList, i) => {
      if (i % 2 != 0) {
        classConstraint = 'new-arrivals-card';
      } else if (i % 2 == 0) {
        classConstraint = 'new-arrivals-card-even';
      }
      subcategoryUpper = NewList.subcategory.toUpperCase();
      if (NewList.special_price == '') {
        return (
          <div className="p-3" key={i}>
            {' '}
            <Card className={'image-box home-card ' + classConstraint}>
              <div className="top-card">
                <p className="card-shoe-category">{subcategoryUpper}</p>
                <p className="card-tag">NEW</p>
              </div>

              <img
                className="img-center"
                src={NewList.image}
                alt={NewList.subcategory}
              ></img>
              <Card.Body>
                <p className="product-name-on-card">{NewList.name}</p>
                <p className="product-price-on-card">
                  Preț : {NewList.price} lei
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      } else {
        return (
          <div className="p-3" key={i}>
            {' '}
            <Card className={'image-box home-card ' + classConstraint}>
              <div className="top-card">
                <p className="card-shoe-category">{subcategoryUpper}</p>
                <p className="card-tag">NEW</p>
              </div>

              <img
                className="img-center"
                src={NewList.image}
                alt={NewList.subcategory}
              ></img>
              <Card.Body>
                <p className="product-name-on-card">{NewList.name}</p>
                <p className="product-price-on-card">
                  Preț :{' '}
                  <strike className="text-secondary">{NewList.price}</strike>{' '}
                  {NewList.special_price} lei
                </p>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container className="home-section">
          {/* <Row className="home-section-row">
            <div className="text-white mb-55">
              <h1>New Arrivals</h1>
            </div>
          </Row> */}
          <Row className="new-arival-products-container home-section-row">
            <Slider
              ref={(c) => (this.slider = c)}
              {...settings}
              className="new-arival-products-slider"
            >
              {RenderView}
            </Slider>
          </Row>
          <Row className="home-section-row">
            <div className="text-center">
              <h2>
                <a
                  className="btn btn-sm ml-2 new-arrival-btn-site"
                  onClick={this.previous}
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="btn btn-sm ml-2 new-arrival-btn-site"
                  onClick={this.next}
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </h2>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
