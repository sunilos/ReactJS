import React from 'react';

class Users extends React.Component {

    constructor() {
        super();
        this.userList = [
            { "id": 1, "name": "One" },
            { "id": 2, "name": "Two" },
        ]
    }

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
                ) )
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
