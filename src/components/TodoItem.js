import React from "react"

function TodoItem(props) {
    const styles = {
        backgroundColor: "#00FFFF",
        fontSize: "20px"
    }

    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "gray"
    }

    return (
        <div style={styles}>
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem