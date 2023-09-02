import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {
  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(false)

  useEffect(() => {
    fetch("http://localhost:4001/ducks")
      .then(res => res.json())
      .then(data => {
        setDucks(data)
        setFeaturedDuck(data[0])
      })
  }, [])

  const handleDisplay = (duck) => {
  setFeaturedDuck(duck)
  }

  const handleToggleForm = () => {
    setDuckFormOpen(!duckFormOpen)
  }
  
  return (
    <div className="App">
      <h1>Duck Manager 2022 - React Edition</h1>
      <DuckList 
        ducks={ducks} 
        handleDisplay={handleDisplay} />
      <DuckDisplay featuredDuck={featuredDuck} />
      <button onClick={handleToggleForm}>{duckFormOpen ? "Close Duck Form" : "Open Duck Form"  } </button>
      {duckFormOpen ? <DuckForm setDucks={setDucks} ducks={ducks} /> : true }

    </div>
  );
}

export default App;
