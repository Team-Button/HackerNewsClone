import React from 'react'
import headerMenu from './headerMenu.json'

export default function Menu() {

    const baseURL = 'https://news.ycombinator.com'

    return (
        <div className="headerMenu">
            {
                headerMenu.map((el) =>
                    <a className="headerMenuLink" href={ `${baseURL}${el.link}` } key={ el.id } id={`menu${el.title}`}> 
                            { el.id === 1? `${el.title} ` : `| ${el.title} ` }
                    </a>
                )
            }
        </div>
    )
}
