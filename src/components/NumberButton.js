import React from 'react'

export default function NumberButton(props) {
    const style = {
        height: "66px",
        width: "66px",
        border: "2px solid black",
        backgroundColor: "gray"
    }
    return (
        <div style={style} onClick={props.handleClick}>
            {props.value}
        </div>
    )
}
