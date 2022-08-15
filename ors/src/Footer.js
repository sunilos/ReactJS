import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return ( 
            <div>
                <hr />
                <h4>Copyright(C) {this.props.name} </h4> 
            </div >
        );
    }
}
export default Footer