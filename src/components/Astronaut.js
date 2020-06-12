import React from "react"

import "./Astronaut.css"

export default function Astronaut(props) {
  return (
    <div className="astronaut">
      <span className="name">{props.name}</span>
      <span className="craft">{props.craft}</span>
    </div>
  )
}
