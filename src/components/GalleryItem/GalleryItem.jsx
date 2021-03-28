import './GalleryItem.css';
import axios from 'axios';




function GalleryItem(props){

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
        <img src={props.item.path} className="image"></img>
        <div>DESCRIPTION: {props.item.description} <button onClick={GalleryLike}>Like</button> {props.item.likes}</div>
        </>
    )
}

export default GalleryItem;