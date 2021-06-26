import classes from "./Car.module.css";
import React, { useState } from "react";
import CarMod from "./CarMod";
function Car({ car, user }) {
  const [displayMod, setDisplayMod] = useState(false);
  function handleClick() {
    if (displayMod) {
      setDisplayMod(false);
    } else {
      setDisplayMod(true);
    }
  }
  return (
    <div className={classes.car}>
      <div className={classes.block}>
        <img src={car.photo} alt="Car" />
        <section>
          <p>
            Name: {car.name}
            <br />
            Model: {car.model}
            <br />
            Horsepower: {car.horsepower}
            <br />
            Engine Displacement: {car.engineDisplacement} L
            <br />
            Date of Manufacture: {car.manufactureDate}
          </p>
          <textarea readOnly value={car.description}></textarea>
        </section>
        <div className={classes.buttonDiv}>
          <button onClick={handleClick}>
            {displayMod ? "Hide Mods" : "Show Mods"}
          </button>
          {displayMod && <CarMod car={car} user={user} />}
        </div>
      </div>
    </div>
  );
}
export default Car;
