import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export class Purchase extends Component {
  render() {
    return (
      <Fragment>
        <section className="purchase-page-section">
          <Container className="purchase-page-container">
            <Row className="p-2 mx-2">
              <Col
                md={12}
                lg={12}
                sm={12}
                xs={12}
                className="purchase-page-column shadow-lg"
              >
                {/* <section className="my-4">
                  <h1 className="h1-responsive font-weight-bold text-center mt-4">
                    Purchase Policy
                  </h1>
                  <p className="text-center">Information for customers</p>
                  <Row className="w-responsive mx-auto mb-5">
                    <p>
                      HTMLJSTEMPLATES.COM is the website owned and run by DBook.
                      All the transactions and invoices are generated using this
                      logo. All the products sold on this site are digital which
                      are in form of HTML,CSS, JS, NodeJS code. Since these are
                      digital products there is no shipping policy involved.
                    </p>
                  </Row>
                  <Row className="w-responsive mx-auto mb-5">
                    <h2 className="h2-responsive font-weight-bold">Delivery</h2>
                    <p>
                      The delivery method is the donwloadable code executed via
                      download button or a link.
                    </p>
                  </Row>
                  <Row className="w-responsive mx-auto mb-5">
                    <h2 className="h2-responsive font-weight-bold">
                      For guest users
                    </h2>
                    <p>
                      Guest users are thoso who doesn't want to create an
                      account but rather just purchase the code. Once, the
                      purchase is made, make sure the code is not deleted other
                      wise you might have to purchase the code again. We are not
                      responsible for the deleted product.
                    </p>
                  </Row>
                  <Row className="w-responsive mx-auto mb-5">
                    <h2 className="h2-responsive font-weight-bold">
                      For registered users
                    </h2>
                    <p>
                      Registered users are those who signup with us and have an
                      account with us Once, the purchase is made, make sure the
                      code is not deleted other wise you might have to purchase
                      the code again. We are not responsible for the deleted
                      product.
                    </p>
                  </Row>
                  <Row className="w-responsive mx-auto mb-5">
                    <h2 className="h2-responsive font-weight-bold">
                      Dispute Resolution and communication
                    </h2>
                    <p>
                      By any case, if the download isn't processed and the
                      payment is made, please contact us at admin@dbook.co.in.
                      We will resolve the issue within 24 hours. The
                      communication is done via emails unless if you are an
                      Indian Resident (available via phone too).
                    </p>
                  </Row>
                  <Row className="w-responsive mx-auto mb-5">
                    <h2 className="h2-responsive font-weight-bold">
                      Technical issues
                    </h2>
                    <p>
                      With software, there could be some undiscovered bugs. To
                      raise complaints, use our contact form. For example, the
                      issue could be "Code not sufficient", "Misleading titles",
                      "Item not supported" or "Version issue". Please state your
                      issue clearly in english while filling up the contact us
                      forn. We will fix it immediately.
                    </p>
                  </Row>
                  <Row className="w-responsive mx-auto mb-5">
                    <h2 className="h2-responsive font-weight-bold">Refund</h2>
                    <p>
                      Refunds are not made once the code is downloaded. Please
                      write to us at admin@dbook.co.in stating why you wanted a
                      refund. We will give our best to resolve the issue or meet
                      a common ground. But in a highly impossible case if a
                      refund is imminent, please expect the refund in 5-7 days
                      post approval of the same.
                    </p>
                  </Row>
                </section> */}
              </Col>
            </Row>
          </Container>
        </section>
      </Fragment>
    );
  }
}

export default Purchase;
