import classes from "./ProfilePic.module.css";
import { Link } from "react-router-dom";

const NavProfilePic = (props) => {
  return (
    <Link to={props.to}>
      <img
        className={classes.img}
        src={props.user?.profilePic}
        alt="Insert profile pic here!"
      ></img>
    </Link>
  );
};

export default NavProfilePic;
