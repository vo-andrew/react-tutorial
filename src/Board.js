import React, { Component } from 'react'
import Square from './Square'

const style = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto auto",
    gridTemplateRows: "auto auto auto auto auto auto auto auto",
    height: "500px",
    width: "500px"
};

const determinePiece = (index) => {
    if (index === 0 || index === 7 || index === 56 || index === 63) {
        return "rook";
    } else if (index === 1 || index === 6 || index === 57 || index === 62) {
        return "knight";
    } else if (index === 2 || index === 5 || index === 58 || index === 61) {
        return "bishop";
    } else if (index === 3 || index === 59) {
        return "queen";
    } else if (index === 4 || index === 60) {
        return "king";
    } else if (index >= 48 && index <= 63) {
        return "pawn";
    } else if (index >= 0 && index <= 15) {
        return "pawn";
    }
};

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGame: []
        }
        this.generateGame = this.generateGame.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.generateGame();
    }

    generateGame() {
        let gridOfSquares = [];
        let blackOrWhite = false;
        for (let i = 0; i < 64; i += 1) {
            let chessPiece = determinePiece(i);
            if (i % 8 === 0) { // Start new rows with the same color as the last square of the previous row.
                blackOrWhite = !blackOrWhite;
            }
            if (blackOrWhite) {
                gridOfSquares.push(<Square 
                    key={i} 
                    color="black" 
                    piece={chessPiece} 
                    handleClick={this.handleClick}
                />);
            } else {
                gridOfSquares.push(<Square 
                    key={i} 
                    color="white" 
                    piece={chessPiece} 
                    handleClick={this.handleClick}
            />);
            }
            blackOrWhite = !blackOrWhite;
        }
        this.setState({currentGame: gridOfSquares});
    }

    handleClick() {
        console.log("I was clicked!");
    }

    render() {
        return (
            <div style={style}>
                {this.state.currentGame}
            </div>
        )
    }
}
