import React, { Component } from 'react'

import "./Cover.css"

export default class Cover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
        this.generateArray = this.generateArray.bind(this);
        this.sortArray = this.sortArray.bind(this);
    }

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        let displayArr = [];
        for (let i = 0; i < 500; i += 1) {
            displayArr[i] = Math.floor((Math.random() * 500));
        }
        this.setState({arr: displayArr});
    }

    sortArray() {
        let sortedArray = this.state.arr;
        sortedArray.sort(function(a, b){return a-b});
        this.setState({arr: sortedArray});
    }

    render() {
        const displayArr = this.state.arr.map((elem, index) => (
            <div className="centerButton" key={index} style={{backgroundColor: "pink", width: "2px", height:`${elem}px`, float:"left"}}>
            </div>
        ));
        return (
            <div>
                <div className="centerButton">
                    <button className="buttonStyle"onClick={this.generateArray}>Generate New Array</button>
                </div>
                <div className="arrayData">
                    {displayArr}
                </div>
                <div className="centerButton">
                    <button className="buttonStyle"onClick={this.sortArray}>Sort Array</button>
                </div>
                
            </div>
        )
    }
}
