import './GalleryItem.css'

function GalleryItem({image}) {

    return(

        <div class="images"><img src={image.path} width="200" height="200"/> <p>{image.description} </p><p><button>Love It!!</button> {image.likes} people love this!</p></div>
    )}

export default GalleryItem