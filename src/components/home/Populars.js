import React, { Fragment, useState, useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import shoe_1 from '../../assets/images/shoe_1.png';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import { Link } from 'react-router-dom';

const images = [shoe_1, shoe_3, shoe_4, shoe_3];
export default function Populars() {
  const [imageIndex, setImageIndex] = useState(0);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark('popular'))
      .then((response) => {
        // this.setState({ productData: response.data });
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let updatedData;
  if (productData.length >= 4) {
    updatedData = [...productData].splice(0, 4);
  } else {
    updatedData = [...productData];
  }

  const PopularsData = updatedData;
  const NextArrow = ({ onClick }) => {
    return (
      <div className="populars-arrow populars-arrow-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="populars-arrow populars-arrow-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
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
      <Container className="home-section popular-products" fluid={true}>
        <Row>
          <div className="text-white text-center mb-55">
            <h1>Cele Mai Populare Produse</h1>
          </div>
        </Row>
        <Row>
          <Slider {...settings} className="popular-products-slider">
            {PopularsData.map((product, idx) => (
              <Col
                key={1}
                className={
                  idx === imageIndex
                    ? 'populars-slide populars-activeSlide'
                    : 'populars-slide'
                }
              >
                <Card className="populars-image-box home-card populars-card-slide">
                  <div className="top-card">
                    <button className="btn btn-dark">
                      <Link
                        to={'/product-details/' + product.id}
                        className="text-white"
                      >
                        VEZI PRODUS
                      </Link>
                    </button>
                  </div>
                  <img
                    className="populars-center-image"
                    src={product.image}
                    alt={product.name}
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card text-center">
                      {product.name}
                    </p>
                    <p className="product-price-on-card text-center">
                      Preț : {product.price} lei
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {/* {images.map((img, idx) => (
              <Col
                key={1}
                className={
                  idx === imageIndex
                    ? 'populars-slide populars-activeSlide'
                    : 'populars-slide'
                }
              >
                <Card className="populars-image-box home-card populars-card-slide">
                  <div className="top-card">
                    <button className="btn btn-dark">VEZI PRODUS</button>
                  </div>
                  <img
                    className="populars-center-image"
                    src={img}
                    alt={img}
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card text-center">
                      Sneakers PUMA - Rs-X³ Puma
                    </p>
                    <p className="product-price-on-card text-center">
                      Preț : 348,00 lei
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))} */}
          </Slider>
        </Row>
      </Container>
    </Fragment>
  );
}
