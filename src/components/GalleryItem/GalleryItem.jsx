import './GalleryItem.css';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Paper from '@material-ui/core/Paper';


function GalleryItem({image, upLikes, deleteImage}) {

    //Container for my image click boolean value
    let [imageClick, setImageClick] = useState(false)
    
    //Function to toggle image and description
    const toggleImage = () => {
        console.log('You clicked the image');
        console.log(imageClick);
        // conditional to set up toggle between image and description
        if( imageClick === false ) {
        setImageClick(true)
        } else {
        setImageClick(false)
        }
    }


    // Function to conditionally render text displayed under button.
    const buttonText = () => {

        if(image.likes === 0) {
            return <p>No one has liked this yet!</p>
        } else if (image.likes ===1) {
            return <p>{image.likes} person likes this!</p>
        } else {
            return <p>{image.likes} people like this!</p>
        }
        }
    

    
    
    return(
        <Paper elevation={10} variant="outlined" className="oneImage">
        <div onClick={() => toggleImage()} >{ !imageClick ? <img src={image.path}/> : <section className="description" >{image.description}</section> }</div>
        <div ><Button startIcon={<ThumbUpIcon />}type="submit" className = "likeButton" onClick={() => upLikes(image)}>Love It!!</Button> 
        <Button startIcon={<Delete />}className = "deleteButton" onClick={() => deleteImage(image)}>delete</Button>{ buttonText()} </div>
        </Paper>
    )}



export default GalleryItem