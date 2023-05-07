import React from 'react'
import Favorite from '../components/Favorites/Favorites'
import authRequire from '../data/auth.require';


export default function Favorites() {
  return (
    <div>
      <Favorite/>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  const user = await authRequire(req, res);
  return {
    props: { user: user || null },
  };
}