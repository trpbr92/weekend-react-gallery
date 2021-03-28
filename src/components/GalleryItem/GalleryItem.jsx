function GalleryItem(props){
    return(
        <>
        <img src={props.item.path}></img>
        <div>DESCRIPTION: {props.item.description} LIKES: {props.item.likes}</div>
        </>
    )
}

export default GalleryItem;