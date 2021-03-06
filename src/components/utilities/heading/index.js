import React from "react"
import "./style.scss"

function heading(props) {
  return (
    <h1
      className="heading"
      style={{ color: props.color, fontSize: props.size }}
    >
      {props.text}
    </h1>
  )
}

export default heading
