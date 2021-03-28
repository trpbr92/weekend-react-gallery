import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){ 
    return(
        <>
        <h1>Gallery List</h1>
        <ul>
          {props.photos.map((item, index)=>
              <GalleryItem item={item}/>
          )}  
        </ul>
        </>
    )
}

export default GalleryList; 