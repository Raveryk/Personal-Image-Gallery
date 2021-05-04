import "../AddGalleryItem/AddGalleryItem.css";
import { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import swal from 'sweetalert';

function AddGalleryItem({ getGalleryList }) {
  const [imagePath, setImagePath] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageLikes, setImageLikes] = useState(0);

  //Function to add Image
  const addGalleryItem = (newImage) => {
    newImage.preventDefault();
    console.log("Submitted:", imagePath, imageDescription, imageLikes);
    
   //Conditional to check to see if the inputs are empty or not.
    if( imagePath  === '' || imageDescription === '' ) {
      alert('Please enter text into input fields')
    } else {

    // Send to image data to server
    axios
      .post("/gallery", {
        path: imagePath,
        description: imageDescription,
        likes: imageLikes,
      })
      .then((response) => {
        console.log("You submitted an image!", response);
        swal({
          title: 'Photo Added',
          icon: "success",
        })
        //clear inputs
        setImagePath("");
        setImageDescription("");
        //refresh gallery
        getGalleryList();
      })
      .catch((error) => {
        console.log("Something went wrong submitting image", error);
        alert("Sorry, something went wrong on the submit.");
      });
    }
  };

  return (
    <div className="form">
      <form>
        <Input
          className="pathInput"
          value={imagePath}
          type="url"
          placeholder="Image URL"
          onChange={(event) => setImagePath(event.target.value)}
        />
        <Input
          className="descriptionInput"
          value={imageDescription}
          type="text"
          placeholder="Description"
          onChange={(event) => setImageDescription(event.target.value)}
        />
        <Button
          disableElevation
          size="small"
          color="primary"
          variant="contained"
          type="submit"
          onClick={addGalleryItem}
        >
          Add Image
        </Button>
      </form>
    </div>
  );
}

export default AddGalleryItem;
