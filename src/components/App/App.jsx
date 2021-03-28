import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    console.log('in useEffect');
    GetGallery();
  }, []);

const GetGallery = ()=>{
  console.log('in getGallery');
  axios.get('/gallery').then((response)=>{
    console.log('back from GET with:', response);
    setPhotos(response.data);
  }).catch((err)=>{
    console.log(err);
    alert('err');
  })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className="gallery">
        <GalleryList photos={photos} likes={GetGallery}/>

        </div>
      </div>
    );
}

export default App;
