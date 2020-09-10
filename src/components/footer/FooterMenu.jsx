import React from 'react'
import footerMenu from './footerMenu.json'

export default function FooterMenu() {

    const baseURL = 'https://news.ycombinator.com'

    return (
        <div className="footerMenu">
            {
                footerMenu.map((el) =>
                    <>
                        <a 
                            className="footerMenuLink"
                            href={ el.title === 'API' || el.title === 'Contact' ? `${el.link}` : `${baseURL}${el.link}` }
                            key={ el.id }
                            id={`menu${el.title}`}>

                            { el.id === 1? `${el.title} ` : `| ${el.title} ` }

                        </a>
                    </>
                )
            }
        </div>
    )
}
