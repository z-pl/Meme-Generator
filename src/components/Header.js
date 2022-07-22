
import img from "../images/Troll-Face.png";
import React from "react";

export default function Header() {
  return (
      <div className="header-title">
        <img className = "header-img" alt = "twhyroll face" src = {img} />
        <h2 className = "header-text">Meme Generator</h2>
      </div>
  )
}
