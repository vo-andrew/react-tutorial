import React from "react"

function TodoItem(props) {
    const styles = {
        color: "#123",
        margin: "0",
        backgroundColor: "#00FFFF"
    }

    return (
        <div style={styles}>
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem