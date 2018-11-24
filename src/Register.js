import React, { Component } from 'react';
import { render } from "react-dom";
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


class Register extends Component{


    render(){

        const styles = {
            Form:{
                width: '180%',
            }
            
        }      

        return(
            <div className ="text-right p-3">
                <span className = "text-secondary pl-1">
                <Row>
                <Container className = "d-flex justify-content-center" >
                <section className=" pt-5 form-gradient justify-content-left">
                    <Row>
                    <Col sm="12">
                        <Card className="Form" style={styles.Form} >
                        <div className="header pt-3 peach-gradient">
                            <Row className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">Sign up</h3>
                            </Row>
                            <Row className="mt-2 mb-3 d-flex justify-content-center">
                            <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg" /></a>
                            <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg" /></a>
                            <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg" /></a>
                            </Row>
                        </div>
                        <CardBody className="mx-4 mt-4">
                            <Input label="Your name" group type="text" validate />
                            <Input label="Your email" group type="text" validate />
                            <Input label="Your password" group type="password" validate containerClass="mb-0"/>
                            <Input label="Repeat password" group type="password" validate containerClass="mb-0"/>
                            <Row className="d-flex align-items-center mb-4 mt-5">
                            <Col md="12" className="justify-content-center ">
                                <div className="text-right">
                                <Button color="grey" rounded type="button" className="z-depth-1a ">Register</Button>
                                </div>
                            </Col>
                            </Row>
                        </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </section>
                </Container>
            </Row>
                </span>
            </div>
        )
    }   
    }


export default Register;