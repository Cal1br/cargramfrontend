import axios from "axios";
import { useRef } from "react";
import React, { useState } from "react";
import classes from "./CarInputForm.module.css";
const CarInputForm = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const nameInputRef = useRef();
  const modelInputRef = useRef();
  const horsepowerInputRef = useRef();
  const displacementInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handlePhotoUpload = ({ carId }) => {
    const url = "/cars/uploadphoto/" + carId;
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
  async function postCarHandler(event) {
    event.preventDefault();
    const car = {
      name: nameInputRef.current.value,
      model: modelInputRef.current.value,
      description: descriptionInputRef.current.value,
      horsepower: horsepowerInputRef.current.value,
      engineDisplacement: displacementInputRef.current.value,
      manufactureDate: dateInputRef.current.value,
    };
    await axios.post("/cars/add", car).then((success) => {
      handlePhotoUpload(success.data);
    });
  }
  return (
    <div className={classes.pictureFrame}>
      <h2>Add car</h2>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked && (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      )}

      <div className={classes.formdata}>
        <form className={classes.form} onSubmit={postCarHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={nameInputRef}></input>
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input required id="model" type="text" ref={modelInputRef}></input>
          </div>
          <div>
            <label htmlFor="horsepower">Horsepower</label>
            <input
              required
              id="horsepower"
              type="number"
              min="90"
              max="2000"
              ref={horsepowerInputRef}
            ></input>
          </div>
          <div>
            <label htmlFor="displacement">Engine displacement</label>
            <input
              required
              id="displacement"
              type="number"
              min="0.3"
              max="12"
              step="0.1"
              ref={displacementInputRef}
            ></input>
            L
          </div>
          <div>
            <label htmlFor="date">Date of manifacture</label>
            <input required id="date" type="date" ref={dateInputRef}></input>
          </div>

          <div>
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
            <button>Add car</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CarInputForm;
