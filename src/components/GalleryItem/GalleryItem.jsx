import './GalleryItem.css';
import {useState} from 'react';


function GalleryItem({image, upLikes }) {

    let [imageClick, setImageClick] = useState(false)
    
         
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
            return <p>   </p>
        } else if (image.likes ===1) {
            return <p>{image.likes} person loves this!</p>
        } else {
            return <p>{image.likes} people love this!</p>
        }
        }
    

    
    
    return(
        <div className="oneImage">
        <div onClick={() => toggleImage()} >{ !imageClick ? <img src={image.path}/> : <section className="description" >{image.description}</section> }</div>
        <div ><button type="submit" className = "button" onClick={() => upLikes(image)}>Love It!!</button> {buttonText()} </div></div>
    )}



export default GalleryItem