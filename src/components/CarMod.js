import axios from "axios";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import classes from "./CarMod.module.css";
import Mod from "./Mod";
import CarModAddForm from "./CarModAddForm";
import { useHistory } from "react-router-dom";

const CarMod = ({ car, user }) => {
  const history = useHistory();
  const [mods, setMods] = useState([]);
  function handleDelete() {
    axios.delete("/cars/" + car.carId);
    history.reload();
  }
  useEffect(() => {
    axios.get("/cars/getmods/" + car.carId).then((response) => {
      setMods(response.data);
    });
  }, []);
  function checkOwnership() {
    if (car.owner.userId === user.userId) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className={classes.modDiv}>
      {checkOwnership() && (
        <div>
          <div className={classes.delButtonDiv}>
            <btn onClick={handleDelete}>Delete Car?</btn>
          </div>

          <CarModAddForm car={car} />
        </div>
      )}

      <ul>
        {mods.map((mod) => (
          <li key={mod.modId}>
            <Mod mod={mod} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarMod;
