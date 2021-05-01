import './GalleryItem.css';
import {useState} from 'react';


function GalleryItem({image, upLikes}) {

    let [imageClick, setImageClick] = useState(false)
    // let [clickCounter, setClickCounter] = useState(0)
         
    const toggleImage = () => {
        console.log('You clicked the image');
        // clickCounter += 1;
        console.log(imageClick);
        // conditional to set up toggle between image and description
        if( imageClick === false ) {
        setImageClick(true)
        } else {
        setImageClick(false)
        }
    }

    
    
    return(
        <div className="images">
        <div onClick={() => toggleImage()} >{ !imageClick ? <img src={image.path} /> : <p className="description">{image.description}</p> }</div>
        <div ><p><button type="submit" onClick={() => upLikes(image)}>Love It!!</button> {image.likes} people love this!</p></div></div>
    )}



export default GalleryItem