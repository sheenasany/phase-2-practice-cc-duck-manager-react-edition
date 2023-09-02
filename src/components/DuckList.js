import React from 'react'
import DuckListCard from './DuckListCard'

function DuckList({ ducks, handleDisplay }) {

  const displayDucks = ducks.map(duck => 
    <DuckListCard 
      handleDisplay={handleDisplay} 
      key={duck.id} 
      duck={duck} 
      />)

  return (
    <div className="duck-nav">
      {displayDucks}
    </div>
  )
}

export default DuckList