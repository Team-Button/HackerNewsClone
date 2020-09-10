import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Article from './components/Article';

function App() {

  const [allArticles, setAllArticles] = useState([])
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then(response => {
      setAllArticles(response.data);
    })
    .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    async function getData() {
      let articleArray = []
      allArticles.map(async element => {
        try {
          const resp = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${element}.json`);
          console.log("resp", resp)
          if (resp) {
            articleArray.push(resp);
          }
        }
        catch (err) {
          return console.log(err);
        }
      })
      console.log(articleArray)
      return articleArray;
    }
    setArticles(getData());
  }, [allArticles, articles])

  return (
    <>
      {console.log(articles)}
      <ol>
      {articles && articles.map((element, index) => {
        if (index < 29) {
          console.log(index)
          index += 1
          return <li key={index}><Article key={index} id={index+1} info={element} /></li>
        }
        // return element
      })}
      </ol>
    </>
  )
}

export default App;
