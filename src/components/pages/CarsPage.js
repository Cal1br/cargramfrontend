import React, { useState, useEffect } from "react";
import cookieCutter from "cookie-cutter";
import isRegistered from "../../utils/isRegistered";
import axios from "axios";
import CarInputForm from "../CarInputForm";
import classes from "./CarsPage.module.css";
const CarsPage = ({ user }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.log("asd");
    axios.get("/cars/getmycars").then((response) => {
      setCars(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <CarInputForm user={user} />
      <ul>
        {cars.map((car) => (
          <li key={car.carId}>
            <div>
              <img src={car.photo} alt="Car" />
            </div>
            <p>
              Name: {car.name}
              <br />
              Model: {car.model}
              <br />
              Horsepower: {car.horsepower}
              <br />
              Engine Displacement: {car.engineDisplacement} L
              <br />
              Date of Manufactur: {car.manufactureDate}
            </p>
            <textarea
              className={classes.description}
              readOnly
              value={car.description}
            ></textarea>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CarsPage;
