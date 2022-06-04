import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import { Link } from 'react-router-dom';
export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesData: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
        <div className="p-3" key={i.toString()}>
          <Card className="image-box home-card categories-card">
            <div className="top-card">
              <p className="card-tag">{categoryList.category_name}</p>
            </div>

            <img
              className="img-center"
              src={categoryList.category_image}
              alt={categoryList.category_name}
            ></img>
            <Card.Body className="text-center">
              <Link to={'/product-category/' + categoryList.category_name}>
                <button className="btn btn-home-go-to-categories-products">
                  Vezi Produse
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      );
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
          <Row className="home-section-row">
            <div className="text-white mb-55">
              <h1>Categorii</h1>
            </div>
          </Row>
          <Row className="home-section-row">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {RenderView}
            </Slider>
          </Row>
          <Row className="home-section-row">
            <div className="text-center">
              <h2>
                <a
                  className="btn btn-sm ml-2 category-btn-site"
                  onClick={this.previous}
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="btn btn-sm ml-2 category-btn-site"
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

export default Categories;
