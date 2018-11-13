import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import {FaUsers} from 'react-icons/fa';

class Navigation extends Component {
    render(){
        return(
            <nav className="site-nav family-sans navbar navbar-expand navbar-dark bg-dark higher">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                    Meeting Log
                    </a>
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="/meetings">
                        meetings
                        </a>
                        <a className="nav-item nav-link" href="/login">
                        log in
                        </a>
                        <a className="nav-item nav-link" href="/register">
                        register
                        </a>
                        <a className="nav-item nav-link" href="/login">
                        log out
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;