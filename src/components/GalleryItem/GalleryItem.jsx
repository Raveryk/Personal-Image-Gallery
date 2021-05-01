import './GalleryItem.css';
import {useState} from 'react';


function GalleryItem({image, upLikes }) {

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
        <div className="oneImage">
        <div onClick={() => toggleImage()} >{ !imageClick ? <img src={image.path}/> : <section className="description" >{image.description}</section> }</div>
        <div ><button type="submit" className = "button" onClick={() => upLikes(image)}>Love It!!</button> {buttonText()} </div></div>
    )}



export default GalleryItem