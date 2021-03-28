function GalleryItem(props){
    return(
        <>
        <li>{props.item.description}, {props.item.likes}</li>
        </>
    )
}

export default GalleryItem;