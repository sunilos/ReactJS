import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class MarksheetList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rollNo :"",
            name: "",
            list : []
        };
        this.search();
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

  
    search(){
        console.log("state:", this.state )
        let url = 'http://api.sunilos.com:9080/ORSP10/Marksheet/search';
        axios.post(url, this.state).then((res) => {
            console.log(res);
            this.setState( {list: res.data.result.data});
        });
    }
    
   
    render() {

        return ( 
            <div>
                <h1>Marksheet List</h1>
                <form >
                    RollNo : 
                    <input name="rollNo" value={this.state.rollNo} 
                    onChange={(event) => this.changeState(event)} />

                    Name : <input name="name" type="text" value={this.state.name} 
                    onChange={(event) => this.changeState(event)}  /> 
                   
                    <button type='button'  onClick={(event) => this.search(event) }>Search</button>
                </form>
                
                <table  border="1"> 
                    <tbody>
                    <tr>
                        <th>Sr No</th>                            
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Maths</th>
                        <th>Physics</th>
                        <th>Chemistry</th>    
                        <th>Total</th>       
                        <th>Percentage</th>       
                        <th>Result</th>                                                                                                                              
                    </tr>                
                    {
                        this.state.list.map((ele,index) => (
                        <tr>
                            <td>{index + 1 }</td>                            
                            <td>{ele.rollNo}</td>
                            <td>{ele.name}</td>
                            <td>{ele.maths}</td>
                            <td>{ele.physics}</td>
                            <td>{ele.chemistry}</td>    
                            <td>{ele.chemistry +ele.physics + ele.maths}</td>   
                            <td>{Math.round((ele.chemistry +ele.physics + ele.maths)/3, 2)}</td>      
                            <td>{ ((ele.chemistry +ele.physics + ele.maths)/3)>=33 ?'Pass':'Fail' }</td>                                                                                                                                      
                            <td><Link to = {'marksheet/' + ele.id}  > Edit </Link></td>    
                        </tr>
                        ) )
                    } 
                </tbody>    
                </table>                
            </div>
        );
    }
}
export default MarksheetList

