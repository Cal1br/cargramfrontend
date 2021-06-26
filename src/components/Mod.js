import classes from "./Mod.module.css";
const Mod = ({ mod }) => {
  return (
    <div>
      <img src={mod.modPicture} alt="Car" />
      <p>
        Price: {mod.Price}
        <br />
        Date of Mod: {mod.date}
      </p>
      <textarea
        className={classes.description}
        readOnly
        value={mod.description}
      ></textarea>
    </div>
  );
};
export default Mod;
