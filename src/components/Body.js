import React from 'react'
import NumberButton from './NumberButton'

export default function Body(props) {
    const style = {
        display: "grid",
        height: "210px",
        width: "210px",
        gridTemplateColumns: "auto auto auto",
        gridTemplateRows: "auto auto auto",
        margin: "0 auto"
    }
    return (
        <div style={style}>
            <NumberButton handleClick={props.handleClick} value={1}/>
            <NumberButton handleClick={props.handleClick} value={2}/>
            <NumberButton handleClick={props.handleClick} value={3}/>
            <NumberButton handleClick={props.handleClick} value={4}/>
            <NumberButton handleClick={props.handleClick} value={5}/>
            <NumberButton handleClick={props.handleClick} value={6}/>
            <NumberButton handleClick={props.handleClick} value={7}/>
            <NumberButton handleClick={props.handleClick} value={8}/>
            <NumberButton handleClick={props.handleClick} value={9}/>
        </div>
    )
}
