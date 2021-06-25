import cookieCutter from "cookie-cutter";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <Link to="/" onClick={handleClick}>
      Logout
    </Link>
  );
};
export default LogoutButton;
