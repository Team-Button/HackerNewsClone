import React from 'react'
import footerMenu from './footerMenu.json'

export default function FooterMenu() {
    return (
        <div>
            {
                footerMenu.map((el) => {
                    <>
                        <a 
                            className="footerMenuLink"
                            href={ el.title === 'API' || el.title === 'Contact' ? `${el.link}` : `${baseURL}${el.link}` }
                            key={ el.id }
                            id={`menu${el.title}`}>

                            { index === 0? `${el.title} ` : `| ${el.title}` }

                        </a>
                    </>
                })
            }
        </div>
    )
}
