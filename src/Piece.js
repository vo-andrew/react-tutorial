import React from 'react'

const style = {
    color: "red",
    backgroundColor: "gray"
};

export default function Piece(props) {
    return (
        <div style={style} onClick={props.handleClick}>
            {props.piece}
        </div>
    )
}
