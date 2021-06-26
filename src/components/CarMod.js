import axios from "axios";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import classes from "./CarMod.module.css";
import Mod from "./Mod";
import CarModAddForm from "./CarModAddForm";
const CarMod = ({ car, user }) => {
  const [mods, setMods] = useState([]);

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
      {checkOwnership() && <CarModAddForm car={car} />}
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
