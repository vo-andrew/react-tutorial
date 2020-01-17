import React from 'react'
import Board from './Board'

const style = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "90vh"
};

export default function Game() {
    return (
        <div style={style}>
            <Board />
        </div>
    )
}
