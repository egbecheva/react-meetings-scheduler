import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Link } from '@reach/router';


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
registerServiceWorker();
