import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from '@reach/router';

class Welcome extends Component{
    render(){
        const {userName, logOutUser} = this.props;

            return(
                <div className ="text-right p-3">
                    <span className = "text-secondary pl-1">
                        Welcome {userName}! 
                    </span>
                </div>
            )
        }   
    }


export default Welcome;