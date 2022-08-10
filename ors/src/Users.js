import React from 'react';

/**
 * User contains an array of user objects. 
 * With the help of map() method of array object view (render method) does display 
 * the elements of array.   
 */
class Users extends React.Component {

    constructor(props) {
        super(props);
        this.userList = [
            { "id": 1, "name": "One" },
            { "id": 2, "name": "Two" },
        ]
    }

    //View method 
    render() {
        return ( 
            <div  >
            <h1> User</h1>

            <table width={'50%'} border="1"> 
                <tr>
                    <th>Index</th>                    
                    <th>ID</th>
                    <th>Name</th>
                </tr>

            {
                this.userList.map((ele,index) => (
                <tr>
                    <td>{index+1}</td>                    
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                </tr>
                ) //arrow function close 
                )//map close
            } 
            </table>
            <br/>
            <hr/>
            <h4>Explanation</h4>
            <p>Example of foreach loop to display a list. It uses map() method of the array</p>             
            </div>
        );
    }
}
export default Users
