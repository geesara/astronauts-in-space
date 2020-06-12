import React, { useState, useEffect } from "react"
import axios from "axios"
import Astronaut from "../components/Astronaut"

import "./index.css"

export default function Home() {
  const [astronauts, setAstronauts] = useState([])

  useEffect(() => {
    axios.get("http://api.open-notify.org/astros.json").then(data => {
      console.log(data)
      setAstronauts(data.data.people)
    })
  }, [])
  return (
    <div className="home">
      <div className="home-container">
        <h1>Astronauts in Space</h1>
        {astronauts.map(astronaut => (
          <Astronaut name={astronaut.name} craft={astronaut.craft} />
        ))}
      </div>
    </div>
  )
}
