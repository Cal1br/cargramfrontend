import classes from "./Mod.module.css";
import imageService from "../services/PhotoService";
const Mod = ({ mod }) => {
  return (
    <div>
      <img src={imageService.getImage(mod.modPicture)} alt="Mod" />
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
