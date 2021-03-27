import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

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
        <GalleryList photos={photos}/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
