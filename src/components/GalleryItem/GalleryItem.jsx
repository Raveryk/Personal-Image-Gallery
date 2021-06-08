import "./GalleryItem.css";
import { useState } from "react";
import { Box, Button, Card, makeStyles } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function GalleryItem({ image, upLikes, deleteImage }) {

  const useStyles = makeStyles(() => ({
    card: {
        borderRadius: 5,
        padding: '75px 50px',
        margin: '0px 25px',
        width: '500px',
        boxShadow: '20px 20px 20px black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '250px',
    },
    imageBottom: {
      width: '100%',
      marginTop: 20,
  },
    Box: {
      display: 'flex',
      
    },
    imageBox: {
      marginLeft: 'auto',
      marginRight: 'auto',
      
    }
}));

  const classes = useStyles();
  
  //Container for my image click boolean value
  let [imageClick, setImageClick] = useState(false);

  //Function to toggle image and description
  const toggleImage = () => {
    console.log("You clicked the image");
    console.log(imageClick);
    // conditional to set up toggle between image and description
    setImageClick(!imageClick)
  };

  // Function to conditionally render text displayed under button.
  const buttonText = () => {
    if (image.likes === 0) {
      return <p>No one has liked this yet!</p>;
    } else if (image.likes === 1) {
      return <p>{image.likes} person likes this!</p>;
    } else {
      return <p>{image.likes} people like this!</p>;
    }
  };

  return (
    <Card elevation={10} variant="outlined" className={classes.card}>
      <div onClick={() => toggleImage()}>
        {!imageClick ? (
       <div className={classes.imageBox}> <img className="img" src={image.path} /> </div>
        ) : (
          <section className="description">{image.description}</section>
        )}
      </div>
      <Box className={classes.box}>
      <div className={classes.imageBottom}>
        <Button
          startIcon={<ThumbUpIcon />}
          type="submit"
          className="likeButton"
          onClick={() => upLikes(image)}
        >
          Love It!!
        </Button>
        <Button
          startIcon={<Delete />}
          className="deleteButton"
          onClick={() => deleteImage(image)}
        >
          delete
        </Button>
        {buttonText()}{" "}
      </div>
      </Box>
    </Card>
  );
}

export default GalleryItem;
