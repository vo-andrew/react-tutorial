import React, { Component } from 'react'

import "./DS.css"

export default class DS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
        this.generateArray = this.generateArray.bind(this);
    }

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        let temp = [];
        for (let i = 0; i < 10; i += 1) {
            temp[i] = i + 1;
        }
        this.setState({array: temp});
    }

    render() {
        let copy = this.state.array.map(elem => (
            <div key={elem} className="array-box">
                <div className="element">
                    {elem}
                </div>
            </div>
        ));
        return (
            <div className="array">
                {copy}
            </div>
        )
    }
}

