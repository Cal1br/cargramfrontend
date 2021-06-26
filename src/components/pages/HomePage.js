import classes from "./HomePage.module.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Car from "../Car";
import { useHistory } from "react-router-dom";
import { set } from "cookie-cutter";

function HomePage({ user }) {
  const [cars, setCars] = useState([]);
  const [err, setErr] = useState(false);
  const searchRef = useRef();
  const history = useHistory();
  function onKeyPressHandler(event) {
    if (event.charCode === 13) {
      axios.get("/user/exists/" + searchRef.current.value).then(
        (data) => {
          if (data.data) {
            history.push("/viewprofile/" + searchRef.current.value);
          } else {
            setErr(true);
          }
        },
        () => {
          setErr(true);
        }
      );
    }
  }
  useEffect(() => {
    axios.get("/cars/feed").then((response) => {
      setCars(response.data);
    });
  }, []);
  return (
    <div className={classes.homePage}>
      <div className={classes.searchDiv}>
        <label htmlFor="search">Search user:</label>
        <input
          type="text"
          required
          id="search"
          ref={searchRef}
          onKeyPress={onKeyPressHandler}
        />
        {err && "Profile doesn't exist"}
      </div>

      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Car car={car} user={[]} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
