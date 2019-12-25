import React from "react"

// import NavBar from "./components/NavBar"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"
// import Joke from "./components/Joke"
// import Product from "./components/Product"
// import products from "./data/products"
import todosData from "./data/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id) {
        this.setState((prevState) => {
            const updated = prevState.todos.map((task) => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task
            })
            return {
                todos: updated
            }
        })
    }

    render() {
        const tasks = this.state.todos.map((task) =>
            <TodoItem
                key={task.id}
                item={task}
                handleChange={this.handleClick}
            />)

        return (
            <div>
                {tasks}
            </div>
        )
    }
}


export default App