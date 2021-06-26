import React, { useState, useEffect } from "react";
import axios from "axios";
import CarInputForm from "../CarInputForm";
import classes from "./CarsPage.module.css";
import Car from "../Car";
const CarsPage = ({ user }) => {
  const [cars, setCars] = useState([]);
  const [addCar, setAddCar] = useState(false);
  function clickAddCar() {
    if (addCar) {
      setAddCar(false);
    } else {
      setAddCar(true);
    }
  }
  useEffect(() => {
    axios.get("/cars/getmycars").then((response) => {
      setCars(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className={classes.carsPage}>
      <div className={classes.form}>
        <btn onClick={clickAddCar}>{addCar ? "Close" : "Add car"}</btn>
        {addCar && <CarInputForm user={user} />}
      </div>
      <ul>
        {cars.map((car) => (
          <li key={car.carId}>
            <Car car={car} user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarsPage;
