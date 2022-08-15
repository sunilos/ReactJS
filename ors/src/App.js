import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users'
import Contact from './Contact'
import NotFound from './NotFound'
import Login from './Login';
import MarksheetList from './MarksheetList';
import Marksheet from './Marksheet';
import Welcome from './Welcome';
import Footer from './Footer';


function App() {

    const logout =function(){
        ReactDOM.render( 
            <React.StrictMode>
                <Login/>
            </React.StrictMode>,
            document.getElementById('root')
        );            
    };

    return (
        < Router >
        <div>
            | <Link to = "/welcome" > Welcome</Link>
            | <Link to = "/users" > Users </Link> 
            | <Link to = "/contact" > Contact </Link> 
            | <Link to = "/marksheetlist" > Marksheet List </Link>
            | <Link to = "/marksheet" > Marksheet </Link>            
            | <Link to = "/logout" onClick={logout} > Logout </Link>
            <Switch> 
                <Route exact path = "/"   component = { Welcome }/>  
                <Route path = "/welcome"    component = { Welcome }/>                
                <Route path = "/users"    component = { Users }/> 
                <Route path = "/contact/:id" component = { Contact }/> 
                <Route path = "/marksheetlist" component = { MarksheetList }/> 
                <Route path = "/marksheet" component = { Marksheet }/> 
                <Route path = "/marksheet/:id" component = { Marksheet }/> 
                <Route component = { NotFound }/> 
            </Switch > 
            <Footer name="Rays"/>
        </div> 
    </Router >
    );
}

export default App;