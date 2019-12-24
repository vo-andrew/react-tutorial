import React from "react"

// import NavBar from "./components/NavBar"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"
// import Joke from "./components/Joke"
// import Product from "./components/Product"
// import products from "./data/products"
import todosData from "./data/todosData"

function App() {
    const tasks = todosData.map((task) => 
    <TodoItem 
        key={task.id} 
        item={task}
    />)

    return (
        <div>
            {tasks}
        </div>
    )
}
export default App