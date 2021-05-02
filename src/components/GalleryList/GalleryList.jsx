import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

// Component to iterate through the galleryList
function GalleryList({ galleryList, upLikes, deleteImage }) {


    return(
        <div className="images">
            {galleryList.map(image => 
            (<GalleryItem key={image.id} image={image} upLikes={upLikes} deleteImage={deleteImage} />)
            )}
        </div>
    )


}

export default GalleryList