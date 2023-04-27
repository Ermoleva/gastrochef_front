import React from 'react'
import Favorites from '../components/Favorites/Favorites'
import { programsData } from '../data/Program'


export default function favorites() {
  return (
    <div>
      <Favorites programs={programsData} />
    </div>
  )
}

