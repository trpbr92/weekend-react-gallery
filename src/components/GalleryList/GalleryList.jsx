import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){ 
    return(
        <>
        <h1>Gallery List</h1>
        <p>{JSON.stringify(props)}</p>
        <GalleryItem />
        </>
    )
}

export default GalleryList; 