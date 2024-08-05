// create your App component here
//Use the useEffect hook in the App component. 
//Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
//Display a <p> tag with the text of "Loading..." when the component is first rendered
//After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".

import React, { useState, useEffect} from "react";

function App (){
 const [dogImage, setDogImage] = useState (null)
 const [isLoading, setIsLoading] = useState (false)

//get random dog pics from Api
 useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res=>res.json())
      .then((image)=>{
        setDogImage(image.message)
        setIsLoading(true)
      })
  }, [])

//loading indicator for when the dog image hasnt been loaded
 if(!isLoading) return <p>Loading...</p>

  return(
    <div>
      <h1>Post A Dog</h1>
      <img src={dogImage} alt="A Random Dog"/>
    </div>
    
  )
}

export default App;