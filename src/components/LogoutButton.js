import cookieCutter from "cookie-cutter";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./LogoutButton.module.css";
const LogoutButton = () => {
  function removeCookie() {
    cookieCutter.set("token", "", {
      expires: new Date(0),
    });
    window.location.reload();
  }
  function handleClick() {
    axios.get("/user/logout").then(removeCookie, removeCookie);
  }
  return (
    <div className={classes.logout}>
      <Link to="/" onClick={handleClick}>
        Logout
      </Link>
    </div>
  );
};
export default LogoutButton;
