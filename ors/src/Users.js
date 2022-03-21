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
            <h1> User1 </h1> 
            <table  border="1"> 
            {
                this.userList.map((ele) => (
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
export default Users
