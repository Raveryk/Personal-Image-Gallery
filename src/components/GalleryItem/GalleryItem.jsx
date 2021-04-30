import './GalleryItem.css';
import {useState} from 'react';


function GalleryItem({image, upLikes}) {

    let [imageClick, setImageClick] = useState(false)
    // let [clickCounter, setClickCounter] = useState(0)
         
    const toggleImage = () => {
        console.log('You clicked the image');
        // clickCounter += 1;
        console.log(imageClick);
        // //set state
        if( imageClick === false ) {
        setImageClick(true)
        } else {
        setImageClick(false)
        }
    }

    // onOrOffDuty = () => {
    //     if(hero.onDuty) {
    //         // need to return JSX
    //         return <p>ON DUTY</p>;
    //     } else {
    //         // need to return JSX
    //         return  <p>SLEEPING</p>;
    //     }
    // }


    // !imageClick ? <img src={image.path} width="200" height="200"/> : <p>{image.description}</p>

    
    return(

        <div className="images" onClick={(event) => toggleImage()} ><div>{ !imageClick ? <img src={image.path} width="200" height="200"/> : <p>{image.description}</p> }</div>
        <p><button type="submit" onClick={(event) => upLikes(image)}>Love It!!</button> {image.likes} people love this!</p></div>
    )}



export default GalleryItem