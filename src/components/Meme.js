import React from "react";
import memesData from "../memesData";
import _ from "lodash";

export default function Meme() {

  const {data:{memes}} = memesData;

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    memeUrl: "http://i.imgflip.com/1bij.jpg"
  });



  const handleClick = (e) => {
    e.preventDefault();
    let randInt = _.random(0, memes.length - 1);

    setMeme(prevMeme => {
      return (
        {
          ...prevMeme,
          memeUrl: memes[randInt].url
        }
      )
    })

  }

  return (
    <div className="meme-container">
      <form className="meme-form">
        <input id = "text-top" type = "text"></input>
        <input id = "text-bottom" type = "text"></input>
        <button onClick = {handleClick} id = "meme-btn">Get a new meme image</button>
      </form>
      <img className="meme-img" src = {meme.memeUrl}></img>
    </div>
  )
}
