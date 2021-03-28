import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){ 
    return(
        <>
        <h1>Gallery List</h1>
        <div>
          {props.photos.map((item, index)=>
              <GalleryItem item={item} key={index}/>
          )}  
        </div>
        </>
    )
}

export default GalleryList; 