import React, { useState } from 'react'

function DuckDisplay({ featuredDuck }) {

  const [likes, setLikes] = useState(0)

  let handleLikes = () => {
    setLikes(featuredDuck.likes += 1)
  }

  return (
    <div className="duck-display">
      <h2>{featuredDuck.name}</h2>
      <img src={featuredDuck.img_url} alt={featuredDuck.name} />
      <button onClick={handleLikes}>{featuredDuck.likes} likes</button>
    </div>
  )
}

export default DuckDisplay
