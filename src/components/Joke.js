import React from "react"

function Joke(props) {
    return (
        <div>
            <h1>{props.question}</h1>
            <h2>{props.punchline}</h2>
        </div>
    )
}

export default Joke