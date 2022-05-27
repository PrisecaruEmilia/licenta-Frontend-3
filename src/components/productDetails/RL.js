import React, { Component, Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppUrl';
import axios from 'axios';

function RL(props) {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    let productCode = props.productCode;

    axios
      .get(AppURL.ReviewList(productCode))
      .then((response) => {
        setReviewData(response.data);
        console.log('How many reviews? -> ', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reviewData]);

  const DataList = reviewData;
  let stars;
  if (DataList.length > 0) {
    const RenderView = DataList.map((ReviewItem, i) => {
      if (ReviewItem.reviewer_rating === '1') {
        stars = (
          <>
            <i className="fa fa-star"></i>
          </>
        );
      } else if (ReviewItem.reviewer_rating === '2') {
        stars = (
          <>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </>
        );
      } else if (ReviewItem.reviewer_rating === '3') {
        stars = (
          <>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </>
        );
      } else if (ReviewItem.reviewer_rating === '4') {
        stars = (
          <>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </>
        );
      } else if (ReviewItem.reviewer_rating === '5') {
        stars = (
          <>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </>
        );
      }
      return (
        <>
          <p className="p-0 m-0" key={i}>
            <span className="product-details-page-review-title">
              {ReviewItem.reviewer_name}
            </span>
            <span className="product-details-page-review-stars">{stars}</span>
          </p>
          <p>{ReviewItem.reviewer_comments}</p>
        </>
      );
    });
    return <>{RenderView}</>;
  } else {
    return <h5 className="text-white">Acest produs nu are reviews</h5>;
  }
}

export default RL;
