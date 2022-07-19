// create your App component here
import { useState, useEffect } from "react";

function App(){
  const [dog, setdog] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( res => res.json())
    .then( res => {
      setdog(res)
      setIsLoaded(true)
    });
  }, []);

  if(!isLoaded) return <p>Loading...</p>;
  // console.log(dog)

  return (
    <img src={dog.message} alt = "A Random Dog" />
  )
}


export default App;