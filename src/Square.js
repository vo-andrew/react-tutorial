import React from 'react'
import Piece from './Piece'

export default function Square(props) {
    const style = {
        height: "60.5px",
        width: "60.5px",
        backgroundColor: props.color,
        border: "1px solid black"
    };
    if (!props.piece) {
        return (
            <div style={style}></div>
        )
    }
    return (
        <div style={style}>
            <Piece piece={props.piece} handleClick={props.handleClick}/>
        </div>
    )
}
