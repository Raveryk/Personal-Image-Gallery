import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'


function GalleryList(props) {

    const galleryList = props.galleryList;

    return(
        <div class="images">
            {galleryList.map(image => 
            (<GalleryItem key={image.id} image={image}/>)
            )}
        </div>
    )


}

export default GalleryList