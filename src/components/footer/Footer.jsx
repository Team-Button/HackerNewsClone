import React from 'react'
import Applications from './Applications'
import FooterMenu from './FooterMenu.jsx'
import Search from './Search'
import './footer.css'

export default function Footer() {
    return (
        <>
            <hr />
            <footer className="footer">
                <Applications />
                <FooterMenu />
                <Search />
            </footer>
        </>
    )
}
