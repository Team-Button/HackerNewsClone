import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Article from './Article'
import './articles.css'

export default function Articles() {

    const [articles, setArticles] = useState([]);
  
    useEffect(() => {
        async function getData(){
            const storyIds = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
            const storyProms = storyIds.data.map(async (element) => {
                return axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
            })
            setArticles(await Promise.all(storyProms))
        }
        getData()
    }, [])
  
  
    return (
      <>
        {console.log(articles)}
        <ol>
        { articles ? articles[0:30].map((element, index) => {
            if (element.info.data !== null)
                return <li key={index+1}><Article key={index} id={index+1} info={element} />
            
            })
            :
            <></>
        }
        </ol>
      </>
    )
}
