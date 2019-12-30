import React from "react"
import Nav from "./routing/Nav"
import About from "./routing/About"
import Shop from "./routing/Shop"

import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
    )
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App