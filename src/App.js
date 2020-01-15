import React from "react"
import Calculator from "./components/Calculator"

function App() {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignCotent: "center",
        height: "100vh"
    }
    return (
        <div style={style}>
            <Calculator />
        </div>
    )
}

export default App