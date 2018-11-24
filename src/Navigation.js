import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import {FaUsers} from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
    render(){
        const {userName} = this.props;
        return(
            <nav className="site-nav family-sans navbar navbar-expand navbar-light bg-light higher">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                    <FaUsers className="mr-3"/>
                    Meetings scheduler
                    </a>
                    <div className="navbar-nav ml-auto">
                        {userName == null && 
                        <div> 
                            <a className="nav-item nav-link" href="/login">
                            Log in
                            </a>
                            <a className="nav-item nav-link" href="/register">
                            Register
                            </a>
                        </div>
                        }
                        {userName != null && 
                        <span> 
                            <a className="nav-item nav-link" href="/meetings">
                            Meetings
                            </a>
                            <a className="nav-item nav-link" href="/login">
                            Log out
                            </a>
                        </span>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;