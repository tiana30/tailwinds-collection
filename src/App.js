import React, {useState, useEffect} from 'react';

function App() {
  const [image, setImages] = useState([]); //state array
  


  useEffect(() => {
    setTimeout(() => {
      fetch(`https:pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&pretty=true`)
      .then(result => result.json())
      .then(data =>  
        setImages(data.hits),
        console.log(image)
      )
      .catch(err => console.log(`error ${err}`))
    }, 3000);
  }, [image]);
  return (
    <div className="App">
    <h1 className="text-teal-800 text-6xl">Hello World</h1>
    </div>
  );
}

export default App;
