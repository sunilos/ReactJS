import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseCtl from './BaseCtl';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Users from './Users'
import Contact from './Contact'
import NotFound from './NotFound'
import Login from './Login';
import MarksheetList from './MarksheetList';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return ( 
            < Router >
                <div>
                    <ul>
                        <li><Link to = "/" > Login </Link> </li> 
                        <li> <Link to = "/users" > Users </Link> </li> 
                        <li> <Link to = "/contact" > Contact </Link> </li> 
                        <li> <Link to = "/marksheetlist" > Marksheet List </Link> </li>  
                    </ul> 
                    <Switch> 
                        <Route exact path = "/"   component = { Login }/> 
                        <Route path = "/users"    component = { Users }/> 
                        <Route path = "/contact/:id" component = { Contact }/> 
                        <Route path = "/marksheetlist" component = { MarksheetList }/> 
                        <Route component = { NotFound }/> 
                    </Switch > 
                </div> 
            </Router >
        );
    }
}
export default Dashboard

