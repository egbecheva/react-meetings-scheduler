import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './home.css';
import {Router} from '@reach/router';


class Meetings extends Component{
    render(){
        return(
                <div overlay='indigo-strong' className="container text-center">
                    MEETINGS
                </div>
        )
    }
}

export default Meetings;

