import React, { useEffect, useState } from 'react'


export function About() {
  const [quote, setQuote] = useState("quote...")
  const [imgUrl, setImgUrl] = useState("")
  

  useEffect(() => {
      fetch('https://api.quotable.io/random')
        .then ((response) => response.json())
        .then ((data) => {
          setQuote(data)
        })

      fetch("https://randomuser.me/api/")
        .then ((response) =>  (response.json()))
        .then (data => {
            let picUrl = data.results[0].picture.large;
            setImgUrl(picUrl);
        })
    
  }, [])



  
  return (
    <div className="content">
        <h1>About</h1>
        <p>Simon is a repetitive memory game where you follow the demonstrated color sequence until you make a mistake. The longer the sequence you repeat, the greater your score.

        The name Simon is a registered trademark owned by Milton-Bradley. Our use of the name and the game is for non-profit educational use only. No part of this code or program should be used outside of that definition.
        </p>
        <div id="quote">{quote.content}</div>
        <div>{quote.author}</div>
        <p>Random picture: </p>
        <div id="api2"></div>
        
        {imgUrl != "" &&
          <img src={imgUrl}/>
        }



    </div>
  );
}