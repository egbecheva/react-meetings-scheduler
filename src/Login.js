import React, { Component } from 'react';
import { render } from "react-dom";
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from '@reach/router';
import firebase from './Firebase';
import FormError from './FormError';
import {navigate} from '@reach/router'



class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            passOne: '',
            passTwo: '',
            errorMessage: null
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

// onChange event calls handleChange and passes the event object

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }


    handleSubmit(e) {
        var registrationinfo = {
           email: this.state.email,
           password: this.state.password
        }
        e.preventDefault();
        firebase
        .auth()
        .signInWithEmailAndPassword(
            registrationinfo.email,
            registrationinfo.password
        ).then(() => {
            navigate('./meetings')
        })
        .catch(error => {
            if (error.message != null) {
                this.setState({errorMessage: error.message});
            } else {
                this.setState({errorMessage: null});
            }
        })
    }

    render() {
        return(
            <div className ="text-right p-3">
                <span className = "text-secondary pl-1">
                <Row>
                <Container className = "d-flex justify-content-center" >
                <section onSubmit={this.handleSubmit} className=" pt-5 form-gradient justify-content-left">
                { this.state.errorMessage != null?(
                    <FormError theMessage={this.state.errorMessage} />
                ):null}
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
                            <Input onChange = {this.handleChange} value = {this.state.email} type="email" name="email" id="email" label="Your email" group type="text" validate />
                            <Input onChange = {this.handleChange} value = {this.state.password} type="password" name="password" id="password" label="Your password" group type="password" validate containerClass="mb-0"/>
                            <p className="font-small grey-text d-flex justify-content-end">Forgot <a href="#" className="dark-grey-text ml-1 font-weight-bold"> Password?</a></p>
                            <Row className="d-flex align-items-center mb-4 mt-5">
                            <Col md="5" className="d-flex align-items-start">
                                <div className="text-center">
                                <Button onClick={this.handleSubmit} color="grey" rounded type="button" className="z-depth-1a">Log in</Button>
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
                </span>
            </div>
        )
    }   
    }


export default Login;