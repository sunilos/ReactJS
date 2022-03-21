import React from 'react';
import BaseCtl from './BaseCtl';
import Dashboard from './Dashboard';
import axios from 'axios';

class MarksheetList extends BaseCtl {

    list = [{
        id: 1,
        rollNo :"A1",
        name: "Ram"
    }, {
        id: 2,
        rollNo :"A2",
        name: "Shyam"
    }];

    constructor(props) {
        super(props);
        this.state = {
            bean : {
                rollNo :"",
                name: ""
            },
            list : []
        };
        this.search = this.search.bind(this);
    }

   
    search(){
        let _self = this;
        console.log("Begfore:", _self.list )
        alert('search ' );
        axios.post('http://api.sunilos.com:9080/ORSP10/Marksheet/search', this.state).then( (res) => {
            //_self.list = res.data.result.data;
            this.setState( {list: res.data.result.data});
            console.log(res.data.result);
            //console.log('List', _self.list);
            
        });

        console.log(this.state);
    }
    
   
    render() {

        return ( 
            <div>
                <h1>Marksheet List</h1>
                <form >
                    RollNo : 
                    <input name="rollNo" value={this.state.bean.rollNo} 
                    onChange={(event) => this.changeState(event)} />

                    Name : <input name="name" type="text" value={this.state.bean.name} 
                    onChange={this.changeState} /> 
                   
                    <button type='button'  onClick={(event) => this.search(event) }>Search</button>
                </form>
                
                <table  border="1"> 
                    {
                        this.state.list.map((ele) => (
                        <tr>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                        </tr>
                        ) )
                    } 
                </table>                
            </div>
        );
    }
}
export default MarksheetList

