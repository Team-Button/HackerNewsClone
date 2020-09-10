import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Article from './components/Article';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then(response => {
      setArticles(response.data.map(e => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${e}.json`)
        .then(resp => {
          console.log(resp.data);
        })
        .catch(err => console.log(err))
      }))
      })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      {articles && articles.map((element, index) => {
        return <Article key={index} id={index+1} props={element} />
      })}
    </>
  )
}

export default App;
