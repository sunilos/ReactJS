import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Display Login page
 */
class Login extends React.Component  {

    constructor(props) {
        super(props);

        //component state 
        this.state = {
             message: "",
             userid :"",
             password: ""
        };
        
    }

     /**
     * Get the input element from event object and change the state of the component
     * @param {*} event: object of current event 
     */
    changeState(event){
        console.log(event);

        let name = event.target.name;
        let value = event.target.value;

        //change the state of component 
        //setState is used to change the state of the component  
        this.setState({ [name] : value});
    }
   
    /**
     * Signin operation 
     */
    signin(){

        console.log(this.state);

        /**
         * If login and password is admin then display App.js page
         */
        if(this.state.userid === "admin" && this.state.password === "admin"){

            //Render a page using ReactDOM.render method
            ReactDOM.render( 
                <React.StrictMode>
                 <App/>
                </React.StrictMode>,
                document.getElementById('root')
            );            
        }else{
            this.setState({ message : "login is invalid"});
        }
    }
    
   
    render() {

        /**   
         * on change event is bound with an arrow function (lambda function).
         * Current event object is passed to the lambda function. 
         * Arrow function in turn call to changeState() function (method)
         *  
         * onChange={(event) => this.changeState(event)}
         * 
         * Likewise click event is bound with arrow function.
         * 
         * onClick={(event) => this.signin(event) }
         * 
         * */

        return ( 
            <div>
                <h1>Login</h1>
                <h3  style={{color: "red"}}> {this.state.message}</h3>
                <form >
                 <table>
                    <tr>
                        <td>User ID:</td>
                        <td><input name="userid" value={this.state.userid} 
                            onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input name="password" type="text" value={this.state.password} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type='button'  onClick={(event) => this.signin(event) }>Signin</button>
                        </td>
                    </tr>
                 </table>
                </form>
            </div>
        );
    }
}
export default Login

