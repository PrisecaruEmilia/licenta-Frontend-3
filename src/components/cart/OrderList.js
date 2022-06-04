import React, { Component } from 'react';
import { Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from 'react-bootstrap';
import cogoToast from 'cogo-toast';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      show: false,
      name: '',
      rating: '',
      comment: '',
      product_name: '',
      product_code: '',
      reviewModal: false,
    };
  }

  componentDidMount() {
    let email = this.props.user.email;
    axios
      .get(AppURL.OrderListByUser(email))
      .then((response) => {
        this.setState({ productData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ReviewModalOpen = (product_code, product_name) => {
    this.setState({
      reviewModal: true,
      product_code: product_code,
      product_name: product_name,
    });
  };
  ReviewModalClose = () => {
    this.setState({ reviewModal: false });
  };

  nameOnChange = (event) => {
    let name = event.target.value;
    this.setState({ name: name });
  };

  RatingOnChange = (event) => {
    let rating = event.target.value;
    this.setState({ rating: rating });
  };

  CommentOnChanage = (event) => {
    let comment = event.target.value;
    this.setState({ comment: comment });
  };
  PostReview = () => {
    let product_code = this.state.product_code;
    let product_name = this.state.product_name;
    let rating = this.state.rating;
    let comment = this.state.comment;
    let name = this.state.name;

    if (name.length === 0) {
      cogoToast.error('Numele este Obligatoriu', { position: 'top-right' });
    } else if (comment.length === 0) {
      cogoToast.error('Comentariul este Obligatoriu', {
        position: 'top-right',
      });
    } else if (rating.length === 0) {
      cogoToast.error('Rating-ul este Obligatoriu', { position: 'top-right' });
    } else if (comment.length > 50) {
      cogoToast.error('Comentariul nu poate fi mai mult de 50 de caractere', {
        position: 'top-right',
      });
    } else {
      let ReviewFromData = new FormData();
      let profilePhoto =
        'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024';
      let photo;
      let userProfilePhoto;
      ReviewFromData.append('product_code', product_code);
      ReviewFromData.append('product_name', product_name);
      ReviewFromData.append('reviewer_name', name);

      if (this.props.user) {
        if (this.props.user.profile_photo_path === null) {
          userProfilePhoto = profilePhoto;
        } else {
          photo = this.props.user.profile_photo_path;
          userProfilePhoto = photo;
        }
      }
      ReviewFromData.append('reviewer_photo', userProfilePhoto);
      ReviewFromData.append('reviewer_rating', rating);
      ReviewFromData.append('reviewer_comments', comment);

      axios
        .post(AppURL.PostReview, ReviewFromData)
        .then((response) => {
          if (response.data === 1) {
            cogoToast.success('Review-ul a fost postat', {
              position: 'top-right',
            });
            this.ReviewModalClose();
          } else {
            cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
              position: 'top-right',
            });
            console.log(response.data);
          }
        })
        .catch((error) => {
          cogoToast.error('A apărut o eroare. Vă rugăm încercați din nou!', {
            position: 'top-right',
          });
          console.log(error);
        });
    }
  };
  render() {
    const DataList = this.state.productData;
    const RenderView = DataList.map((ProductList, i) => {
      return (
        <div key={i}>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h5>{ProductList.product_name}</h5>
            <h6>Cantitate = {ProductList.quantity} </h6>
            <p>
              {ProductList.size} | {ProductList.color}
            </p>
            <h6>
              Preț = {ProductList.unit_price} x {ProductList.quantity} ={' '}
              {ProductList.total_price} Lei
            </h6>
            <h6>Stauts = {ProductList.order_status} </h6>
          </Col>
          <Button
            onClick={this.ReviewModalOpen.bind(
              this,
              ProductList.product_code,
              ProductList.product_name
            )}
            className="btn btn-danger"
          >
            Postează Review
          </Button>
          <hr></hr>
        </div>
      );
    });
    return (
      <Fragment>
        <section className="order-list-page-section">
          <div className="order-list-page-container">
            <Row className="p-2 mx-2">
              <Container>
                <div className="section-title text-center my-5">
                  <h2>Istoricul comenzilor - ( {this.props.user.name} )</h2>
                </div>

                <Card>
                  <Card.Body>
                    <Row>{RenderView}</Row>
                  </Card.Body>
                </Card>
              </Container>
            </Row>
          </div>
        </section>
        <Modal show={this.state.reviewModal} onHide={this.ReviewModalClose}>
          <Modal.Header closeButton>
            <h5>
              <i className="fa h5 fa-heart order-list-page-pencil-icon"></i>{' '}
              Postează Review{' '}
            </h5>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Nume</label>
              <input
                onChange={this.nameOnChange}
                className="form-control"
                type="text"
                placeholder={this.props.user.name}
              />
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Select Rating-ul</label>
              <select onChange={this.RatingOnChange} className="form-control">
                <option value="">Alege</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
              <label className="form-label">Comentariu</label>
              <textarea
                onChange={this.CommentOnChanage}
                rows={2}
                className="form-control"
                type="text"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.PostReview}>
              Post
            </Button>
            <Button variant="secondary" onClick={this.ReviewModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default OrderList;
