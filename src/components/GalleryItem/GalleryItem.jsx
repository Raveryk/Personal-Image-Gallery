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

        <div className="images" onClick={(event) => toggleImage()} ><div>{ !imageClick ? <img src={image.path} width="200" height="200"/> : <p>{image.description}</p> }</div>
        <p><button type="submit" onClick={(event) => upLikes(image)}>Love It!!</button> {image.likes} people love this!</p></div>
    )}



export default GalleryItem