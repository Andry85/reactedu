import './Slider.css';
import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../UseWindowDimensions/UseWindowDimensions';


function Slider(props) {
  const {width } = useWindowDimensions();

  let initailPos = 0;
  let lastPos;
  

  if (width > 1023) {
    lastPos = 4;
  } else if (width > 767) {
    lastPos = 2;
  } else {
    lastPos = 1;
  }

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(initailPos);
  const [lastIndex, setLastIndex] = useState(lastPos);
  

  const prevSLide  = () => {

    if (index >= 1) {
      setIndex(index - 1);
      setLastIndex(lastIndex - 1);
    } else {
      setIndex(photos.length - lastPos);
      setLastIndex(photos.length);
    }

  }

  const nextSlide  = () => {
    if (index >= photos.length - lastPos) {
      setIndex(initailPos);
      setLastIndex(lastPos);
    } else {
      setIndex(index + 1);
      setLastIndex(lastIndex + 1);
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPhotos(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      function handleResize() {
        
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);


  }, [])

 

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ul className="slider">
          {photos.slice(index, lastIndex).map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>id: {item.id}</p>
              <img src={item.thumbnailUrl} />
            </li>
          ))}
        </ul>
        <button onClick={prevSLide}>
          Prev
        </button>
        <button onClick={nextSlide}>
          Next
        </button>
      </>
    );
  }
}

export default Slider;
