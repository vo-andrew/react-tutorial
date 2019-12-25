import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: true
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <header>
//                 <p>
//                     Welcome, {this.props.username}!
//             </p>
//             </header>
//         )
//     }
// }

// class Greeting extends React.Component {
//     render() {
//         const date = new Date()
//         const hours = date.getHours()
//         return (
//             <div>
//                 Hours: {hours}
//             </div>
//         )
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"))