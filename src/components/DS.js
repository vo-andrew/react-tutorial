import React, { Component } from 'react'

import "./DS.css"

export default class DS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
        this.generateArray = this.generateArray.bind(this);
        this.unsortArray = this.unsortArray.bind(this);
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

    unsortArray() {
        let copy = this.state.array
        for (let i = 0; i < 10; i += 1) {
            let index = Math.floor(Math.random() * 10);
            let temp = copy[i];
            copy[i] = copy[index];
            copy[index] = temp;
        }
        this.setState({array: copy});
    }

    render() {
        let copy = this.state.array.map(elem => (
            <div key={elem} className="element">
                {elem}
            </div>
        ));
        return (
            <div>
                <div className="array">
                    <div className="array-box">
                        {copy}
                     </div>
                </div> 
                <button className="button" onClick={this.unsortArray}>Mix the array!</button>
            </div>
               
        )
    }
}

