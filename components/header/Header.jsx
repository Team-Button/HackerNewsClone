import React from 'react'
import Navigation from './Navigation'
import Login from './Login'

export default function Header() {
    return (
        <header className="header">
            <Navigation />
            <Login />
        </header>
    )
}
