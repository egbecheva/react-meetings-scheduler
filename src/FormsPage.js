import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class FormsPage extends React.Component  {
    render() {
      return(
        <Row>
            <Container className = "d-flex justify-content-center" >
            <section className=" pt-5 form-gradient justify-content-left">
                <Row>
                <Col sm="12">
                    <Card>
                    <div className="header pt-3 peach-gradient">
                        <Row className="d-flex justify-content-center">
                        <h3 className="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
                        </Row>
                        <Row className="mt-2 mb-3 d-flex justify-content-center">
                        <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg" /></a>
                        <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg" /></a>
                        <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg" /></a>
                        </Row>
                    </div>
                    <CardBody className="mx-4 mt-4">
                        <Input label="Your email" group type="text" validate />
                        <Input label="Your password" group type="password" validate containerClass="mb-0"/>
                        <p className="font-small grey-text d-flex justify-content-end">Forgot <a href="#" className="dark-grey-text ml-1 font-weight-bold"> Password?</a></p>
                        <Row className="d-flex align-items-center mb-4 mt-5">
                        <Col md="5" className="d-flex align-items-start">
                            <div className="text-center">
                            <Button color="grey" rounded type="button" className="z-depth-1a">Log in</Button>
                            </div>
                        </Col>
                        <Col md="7" className="d-flex justify-content-end">
                            <p className="font-small grey-text mt-3">Don't have an account? <a href="#" className="dark-grey-text ml-1 font-weight-bold"> Sign up</a></p>
                        </Col>
                        </Row>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            </section>
            </Container>
        </Row>
      );
    }
  };
  

export default FormsPage;