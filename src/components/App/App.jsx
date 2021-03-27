import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {

  useEffect(()=>{
    console.log('in useEffect');
    getGallery();
  }, []);

const getGallery = ()=>{
  console.log('in getGallery');
  axios.get('/gallery').then((response)=>{
    console.log('back from GET with:', response);
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
        <GalleryList />
        <GalleryItem />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
