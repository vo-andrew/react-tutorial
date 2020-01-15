import React, { Component } from 'react'
import Display from './Display'
import Body from './Body'

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("I was clicked!");
    }

    render() {
        const style = {
            margin: "auto",
            height: "300px",
            width: "230px", 
            backgroundColor: "DodgerBlue",
        };

        return (
            <div style={style}>
                <Display />
                <Body handleClick={this.handleClick}/>
            </div>
        )
    }
}
