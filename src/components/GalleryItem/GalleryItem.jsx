import './GalleryItem.css';
import axios from 'axios';
import {useState} from 'react';

 


function GalleryItem(props){

     const [showDescription, setShowDescription] = useState(false);

     let toggleName = ()=>{
         setShowDescription(!showDescription);
         console.log('in toggleName', showDescription);
     }

     let displayDescription = ()=>{
         let displayText = '';
         if (showDescription) {
             displayText = props.item.description
         }
         return displayText;
     }

    const GalleryLike = ()=>{
        let id = props.item.id;
        console.log('in GalleryLike', id);
        axios.put('/gallery/like/' + id).then(
          props.likes
        ).catch((err)=>{
          console.log(err);
          alert('problem with put');
        })
      }

    return(
        <>
        <img src={props.item.path} className="image" onClick={toggleName}></img>
        <div>{displayDescription()}</div>
        <div><button onClick={GalleryLike}>Like</button> {props.item.likes} People like this! </div>
        </>
    )
}

export default GalleryItem;