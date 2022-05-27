import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppUrl';
import axios from 'axios';

export class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
    };
  }

  componentDidMount() {
    let productCode = this.props.productCode;

    axios
      .get(AppURL.ReviewList(productCode))
      .then((response) => {
        this.setState({ reviewData: response.data });
        console.log('How many reviews? -> ', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const DataList = this.state.reviewData;
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
}

export default ReviewList;
