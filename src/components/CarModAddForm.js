import axios from "axios";
import { useRef } from "react";
import React, { useState } from "react";
import classes from "./CarInputForm.module.css";
const CarModAddForm = ({ car }) => {
  const priceInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handlePhotoUpload = ({ modId }) => {
    const url = "/cars/uploadmodphoto/" + modId;
    const formData = new FormData();
    formData.append("File", selectedFile);
    axios.post(url, formData).then(
      () => {
        console.log("Succes");
      },
      () => {
        console.error("Error:");
      }
    );
  };
  async function postModHandler(event) {
    event.preventDefault();
    const mod = {
      price: priceInputRef.current.value,
      description: descriptionInputRef.current.value,
      date: dateInputRef.current.value,
    };
    await axios.post("/cars/addmod/" + car.carId, mod).then((success) => {
      handlePhotoUpload(success.data);
    });
  }
  return (
    <div className={classes.formFrame}>
      <div className={classes.pictureFrame}>
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked && (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        )}
      </div>

      <div className={classes.formdata}>
        <form className={classes.form} onSubmit={postModHandler}>
          <div className={classes.control}>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" ref={priceInputRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date</label>
            <input required id="date" type="date" ref={dateInputRef}></input>
          </div>

          <div className={classes.description}>
            <label htmlFor="description">Description</label>
            <textarea
              className={classes.textarea}
              maxLength="1500"
              required
              id="description"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.buttonDiv}>
            <button className={classes.button}>Add Mod</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CarModAddForm;
