import React from 'react';
import axios from 'axios';
/**
 * Display marksheet page
 */
class Marksheet extends React.Component  {

    constructor(props) {
        super(props);
        //component state 
        let p = this.props.match.params;
        this.state = {
            id: 0, 
            rollNo: "",            
            name: "",
            physics: 0,
            chemistry: 0,
            maths: 0,
        };
        console.log("Marksheet", p);
        this.getMarksheet(432);
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
   
    getMarksheet(id){
        console.log("state:", this.state )
        let url = 'http://api.sunilos.com:9080/ORSP10/Marksheet/get/'+id;
        axios.get(url).then((res) => {
            this.setState(res.data.result.data);
        });
    }
    
    /**
     * Signin operation 
     */
    save(){
        console.log(this.state);
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
                <h1>Marksheet</h1>
                <h3  style={{color: "red"}}> {this.state.message}</h3>
                <form >
                 <table>
                    <tbody>
                    <tr>
                        <td>RollNo:</td>
                        <td><input name="rollNo" value={this.state.rollNo} 
                            onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <input name="name" type="text" value={this.state.name} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Physics:</td>
                        <td>
                            <input name="physics" type="text" value={this.state.physics} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>   
                    <tr>
                        <td>Chemistry:</td>
                        <td>
                            <input name="chemistry" type="text" value={this.state.chemistry} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>              
                    <tr>
                        <td>Maths:</td>
                        <td>
                            <input name="maths" type="text" value={this.state.maths} 
                                onChange={(event) => this.changeState(event)} />
                        </td>
                    </tr>                                                     
                    <tr>
                        <td colSpan={2}>
                            <button type='button'  onClick={(event) => this.save(event) }>Save</button>
                        </td>
                    </tr>
                    </tbody>
                 </table>
                </form>
            </div>
        );
    }
}
export default Marksheet

