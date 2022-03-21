import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Users from './Users'
import Contact from './Contact'
import NotFound from './NotFound'
import Login from './Login';

const routing = ( 
    < Router >
    <div>
        <ul>
            <li><Link to = "/" > Home </Link> </li> 
            <li> <Link to = "/users" > Users </Link> </li> 
            <li> <Link to = "/contact" > Contact </Link> </li> 
        </ul> 
        <Switch> 
            <Route exact path = "/"   component = { App }/> 
            <Route path = "/users"    component = { Users }/> 
            < Route path = "/contact/:id" component = { Contact }/> 
            <Route component = { NotFound }/> 
        </Switch > 
    </div> 
    </Router >
)


ReactDOM.render( 
    <React.StrictMode>
    <Login/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();