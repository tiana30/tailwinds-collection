import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => 
      setImages(data.hits),
      setIsLoading(false),
      )
    .catch(err => console.log("error" + err))
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1> 
      : 
      <div className="grid grid-cols-3 gap-4">
      
        {images.map( thumbnail => (
          <ImageCard key={thumbnail.id} image={thumbnail}/>
        ))}
      </div>
      }
    </div>
  );
}

export default App;
