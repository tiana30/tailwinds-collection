import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [image, setImages] = useState([]); //state array
  const [isLoading, setIsLoading] = useState(true); //state boolean


  useEffect(() => {
    setTimeout(() => {
      fetch(`https:pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&pretty=true`)
      .then(result => result.json())
      .then(data =>  
        setImages(data.hits),
        setIsLoading(false),
        //console.log(image)
      )
      .catch(err => console.log(`error ${err}`))
    }, 3000);
  }, [image]);
  return (
    <div className="container mx-auto">
    <h1 className="text-teal-800 text-6xl">Gallery</h1>
    {isLoading ? <h1 className="text-6xl text-teal-800 text-center mx-auto mt-32">Loading....</h1> 
      : <div className="grid grid-cols-3 gap-4">
        {image.map(thumbnail => (
          <ImageCard key={thumbnail.id} image={thumbnail} />
        ))}
        
        </div>
    }
    </div>
  );
}

export default App;
