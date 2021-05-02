import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
import Grid from '@material-ui/core/Grid';

// Component to iterate through the galleryList
function GalleryList({ galleryList, upLikes, deleteImage }) {


    return(
        <Grid container spacing ={4} className="images">
            {galleryList.map(image => 
            (<Grid justify="center" alignItems="center" direction ="row" container item sm={4} spacing={1}><GalleryItem key={image.id} image={image} upLikes={upLikes} deleteImage={deleteImage} /></Grid>)
            )}
        </Grid>
    )


}

export default GalleryList