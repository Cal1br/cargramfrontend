import axios from "axios";
import classes from "./ProfilePicComponent.module.css";
import React, { useState } from "react";

const ProfilePicComponent = ({ profilePic }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("File", selectedFile);
    axios.post("/user/uploadPfp", formData).then(
      () => {
        console.log("Succes");
      },
      () => {
        console.error("Error:");
      }
    );
  };
  return (
    <div>
      <img src={profilePic} alt="Profile" />
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
      {isFilePicked && (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      )}
    </div>
  );
};
export default ProfilePicComponent;
