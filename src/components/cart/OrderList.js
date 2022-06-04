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
import AppURL from '../../api/AppUrl';
import axios from 'axios';
export class OrderList extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      show: false,
      notificationData: [],
      notificationMsg: '',
      notificationTitle: '',
      notificationDate: '',
      name: '',
      rating: '',
      comment: '',
      product_name: '',
      product_code: '',
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

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (event) => {
    this.setState({ show: true });
    let Nmsg = event.target.getAttribute('data-message');
    let Ntitle = event.target.getAttribute('data-title');
    let Ndate = event.target.getAttribute('data-date');
    this.setState({
      notificationMsg: Nmsg,
      notificationTitle: Ntitle,
      notificationDate: Ndate,
    });
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

  PostReview = () => {};
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
          <Button onClick={this.handleShow} className="btn btn-danger">
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
        <Modal show={this.state.show} onHide={this.handleClose}>
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
                placeholder=""
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
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default OrderList;
