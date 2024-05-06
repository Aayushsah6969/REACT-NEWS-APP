//import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import { useState, useEffect } from 'react';

const Newsboard = ({category}) => {
    const[articles, setarticle]=useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setarticle(data.articles));
    },[category])
  return (
    <>
        <h1 className='text-center'>Latest <span className='badge bg-danger'>News</span></h1>
        {articles.map((news,index)=>{
            return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </>
  )
}

export default Newsboard