import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class BaseCtl extends React.Component {

    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
    }

    /**
     * Bind the form vlaues to class state
     * @param {*} event 
     */
    changeState(event){
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name] : value});
    }
}

export default BaseCtl

