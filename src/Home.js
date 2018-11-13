import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './home.css';


class Home extends Component{
    render(){
        
        const styles = {
            a:{
            color: '#dc3545', 
            textDecoration:'none',
            }
        }

        const {userName} = this.props;

        return(
                <div overlay='indigo-strong' className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                            <div className="display-4 text-danger mb-2">
                                Meetings scheduler
                            </div>
                            <p className="lead">
                                This simple app creates meetings, allows people to check
                                in, and picks random users to award giveaways. This is a Single Page Application which includes
                                connection to a database and routing. It's a practical
                                way to learn <a overlay="indigo-strong" href="https://reactjs.org/" style={styles.a}>React </a> 
                                with <a overlay="indigo-strong" href="https://firebase.google.com" style={styles.a}>Firebase</a>.
                            </p>
    
                            {userName == null && (
                                <span>
                                    <Button gradient="peach" href="/register">
                                    Register
                                    </Button>  
                                    <Button color="grey" href="/login">
                                    Log In
                                    </Button>
                                </span>        
                            )}

                            {userName != null && <a href="/meetings" className="btn btn-danger"  >
                                Meetings
                            </a>}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Home;

