import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){ 
    return(
        <>
        <h1>Gallery List</h1>
        <ul>
            {props.photos.map((photo, index)=>
                <GalleryItem photo={photo} key={index}/>
            )}
        </ul>
        <GalleryItem />
        </>
    )
}

export default GalleryList; 