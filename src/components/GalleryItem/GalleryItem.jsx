import './GalleryItem.css'


function GalleryItem({image, upLikes}) {

    return(

        <div className="images"><img src={image.path} width="200" height="200"/><p>{image.description}</p>
        <p><button type="submit" onClick={(event) => upLikes(image)}>Love It!!</button> {image.likes} people love this!</p></div>
    )}

export default GalleryItem