import React from 'react';
import BaseCtl from './BaseCtl';
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom';

class Login extends BaseCtl {

    id = 'Ram';

    constructor(props) {
        super(props);
        this.state = {
             userid :"sunilsahu007",
             password: "ramram"
        };
        console.log('State', this.state);
        //console.log('--->',props);
    }

   
    signin(){
        alert('Signin ' );
       
        ReactDOM.render( 
            <React.StrictMode>
             <Dashboard/>
            </React.StrictMode>,
            document.getElementById('root')
        );
               
    }
    
   
    render() {

        return ( 
            <div>
                <h1>Login</h1>
                <h3 >Error {this.id}</h3>
                <form >
                    User ID : 
                    <input name="userid" value={this.state.userid} 
                    onChange={(event) => this.changeState(event)} />

                    Password : <input name="password" type="text" value={this.state.password} 
                    onChange={this.changeState} /> 
                   
                    <button type='button'  onClick={(event) => this.signin(event) }>Signin</button>
                </form>
            </div>
        );
    }
}
export default Login

