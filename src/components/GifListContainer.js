import react, { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer(){

    const [gifData, setGifData] = useState([])

    const handleSearch = (searchTerm) => {
      

        const apiKey = '8ApsyGfSDtOPgWHeXmIYjV1m9BmAFkpx';
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=g`)
          .then(response => response.json())
          .then(data => setGifData(data.data.slice(0, 3)))
          .catch(error => console.error('Error:', error));
      };

    return(
        <div>
           <GifList gifData={gifData}/> 
           <GifSearch onSearch={handleSearch} />
        </div>
    )
}
export default GifListContainer