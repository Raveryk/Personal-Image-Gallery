
function GalleryList(props) {

    const galleryList = props.galleryList;

    return(
        <div>
            {galleryList.map(image => 
                (<li key={image.id}>{image.path}{image.description}<p><button>love it!</button></p>{image.likes}</li>))}
        </div>
    )


}

export default GalleryList