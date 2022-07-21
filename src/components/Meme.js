 import React from "react"

 export default function Meme() {
  return (
    <div className="meme-container">
      <form className="meme-form">
        <input id = "text-top" type = "text"></input>
        <input id = "text-bottom" type = "text"></input>
        <button id = "meme-btn">Get a new meme image</button>
      </form>
    </div>
  )
 }
