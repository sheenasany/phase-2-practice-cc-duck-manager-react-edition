import React, { useState } from 'react'

function DuckForm({ setDucks, ducks }) {
  const [name, setName] = useState("") 
  const [img_url, setImage] = useState("")
  const [likes, setLikes] = useState(0)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleImage = (e) => {
    setImage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newDuck = {
      name: name,
      img_url: img_url,
      likes: likes
    }

    fetch(`http://localhost:4001/ducks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(newDuck)
    })
    .then(res => res.json())
    // .then(ducks(newDuck))

  setDucks([...ducks, newDuck])
  setName("")
  setImage("")
  setLikes("")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} id="new-duck-form">
      <label for="duck-name-input">New Duck Name:</label>
      <input 
        type="text" 
        name="duck-name-input" 
        value={name}
        onChange={(e) => handleName(e)}
        />

      <label for="duck-image-input">New Duck Image URL:</label>
      <input 
        type="text" 
        name="duck-image-input"
        value={img_url}
        onChange={(e) => handleImage(e)}
        />

      <input 
        type="submit" 
        value="Create Duck" 
      />
    </form>
  )
}

export default DuckForm
