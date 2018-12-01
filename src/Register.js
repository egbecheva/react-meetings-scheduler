import React, { Component } from 'react';
import { render } from "react-dom";
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import FormError from './FormError';
import firebase from './Firebase';


class Register extends Component{

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

        this.setState({[itemName]: itemValue}, () => {if (this.state.passOne != this.state.passTwo){
            this.setState({errorMessage:"Passwords don't match"})
            } else {
                this.setState({errorMessage: null});
            }
        });
    }


    handleSubmit(e) {
        var registrationinfo = {
           displayName: this.state.displayName,
           email: this.state.email,
           password: this.state.passOne
        }
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(
            registrationinfo.email,
            registrationinfo.password
        ).then(() => {
            this.props.registerUser(registrationinfo.displayName);
        })
        .catch(error => {
            if (error.message != null) {
                this.setState({errorMessage: error.message});
            } else {
                this.setState({errorMessage: null});
            }
        })
    }
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
                <section className=" pt-5 form-gradient justify-content-left" onSubmit = {this.handleSubmit}>
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
                        { this.state.errorMessage != null?(
                            <FormError theMessage={this.state.errorMessage} />
                        ):null}
                        
                            <Input onChange = {this.handleChange} value={this.state.displayName} name="displayName"label="Your name" group type="text" validate />
                            <Input onChange = {this.handleChange} value={this.state.email} name="email" label="Your email" group type="text" validate />
                            <Input onChange = {this.handleChange} value={this.state.passOne} name="passOne" label="Your password" group type="password" validate containerClass="mb-0"/>
                            <Input onChange = {this.handleChange} value={this.state.passTwo} name="passTwo" label="Repeat password" group type="password" validate containerClass="mb-0"/>
                            <Row className="d-flex align-items-center mb-4 mt-5">
                            <Col md="12" className="justify-content-center ">
                                <div className="text-right">
                                <Button onClick={this.handleSubmit} color="grey" rounded type="button" className="z-depth-1a ">Register</Button>
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