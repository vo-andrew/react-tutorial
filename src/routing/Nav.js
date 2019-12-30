import React from 'react'
import { Link } from 'react-router-dom'

import "./App.css"

export default function Nav() {
    const navstyle = {
        color: 'white'
    };


    return (
        <nav>
            <ul className="navlinks">
                <Link style={navstyle} to="/">
                    <h3>Logo</h3>
                </Link>
                <Link style={navstyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navstyle} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}
