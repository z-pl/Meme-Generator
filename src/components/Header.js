
import img from "../images/troll-face.png";
import React from "react";

export default function Header() {
  return (
      <div className="header-title">
        <img className = "header-img" alt = "troll face" src = {img} />
        <h2 className = "header-text">Meme Generator</h2>
      </div>
  )
}
