import React from 'react'
import Menu from './Menu'
import NavBrand from './NavBrand'

export default function Navigation() {
    return (
        <nav className="navigation" id="navigationHeader">
            <NavBrand />
            <Menu />
        </nav>
    )
}
