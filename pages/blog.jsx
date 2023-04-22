import React from 'react'
import Articles from '../components/Articles'
import queries from '../data/queries';

export default function blog({articles}) {
  return (
    <div>
      <Articles articles={articles}/>
    </div>
  )
}



export async function getStaticProps() {
  const res = await queries.get('/blog');
  return {
    props: { 
      articles: res.data 
    },
  };
}