import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./ViewProfile.module.css";
import Car from "../Car";
const ViewProfile = () => {
  let { username: username } = useParams();
  const [user, setUser] = useState([]);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get("/user/" + username).then((response) => {
      setUser(response.data);
    });
    axios.get("/cars/getforuser/" + username).then((response) => {
      console.log(response.data);
      setCars(response.data);
    });
  }, []);
  return (
    <div>
      {user ? (
        <div>
          <div className={classes.profileInfo}>
            <div className={classes.profilePictureFrame}>
              <img src={user.profilePic} alt={"Profile"}></img>
            </div>
            <p>Username: {user.username}</p>
            <p>Is Online?: {user.isOnline}</p>
            <p>Last Online: {user.lastOnline}</p>
            <p>Account creation: {user.accountCreation}</p>
            <textarea
              className={classes.textarea}
              readOnly="true"
              wrap="hard"
              value={user.biography}
            ></textarea>
          </div>
          <u>
            {cars.map((car) => (
              <li>
                <Car car={car} />
              </li>
            ))}
          </u>
        </div>
      ) : (
        "No such profile"
      )}
    </div>
  );
};
export default ViewProfile;
