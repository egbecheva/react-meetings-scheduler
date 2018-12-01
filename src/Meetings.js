import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './home.css';
import {Router} from '@reach/router';
import { render } from "react-dom";
import { Link } from '@reach/router';
import firebase from './Firebase';
import FormError from './FormError';
import {navigate} from '@reach/router'



class Meetings extends Component{
    constructor(props){
        super(props);
        this.state = {
            meetingName: ''
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
       
        e.preventDefault();
        this.props.addMeeting(this.state.meetingName);
        this.setState({meetingName: ''});
    }



    render(){
        return(
            <div overlay='indigo-strong' className="container text-center">
                <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                    <h1 className="font-weight-light">Add a Meeting</h1>
                    <div className="card bg-light">
                        <div className="card-body text-center">
                        <form
                            className="formgroup"
                            onSubmit = {this.handleSubmit}
                        >
                            <div className="input-group input-group-lg">
                            <input
                                type="text"
                                className="form-control"
                                name="meetingName"
                                placeholder="Meeting name"
                                aria-describedby="buttonAdd"
                                value={this.state.meetingName}
                                onChange = {this.handleChange}
                            />
                            <div className="input-group-append">
                                <button
                                type="submit"
                                className="btn btn-sm btn btn-danger"
                                id="buttonAdd"
                                >
                                +
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Meetings;

