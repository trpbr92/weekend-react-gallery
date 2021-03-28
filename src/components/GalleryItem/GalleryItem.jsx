import './GalleryItem.css';

function GalleryItem(props){
    return(
        <>
        <img src={props.item.path} className="image"></img>
        <div>DESCRIPTION: {props.item.description} <button>Like</button> {props.item.likes}</div>
        </>
    )
}

export default GalleryItem;