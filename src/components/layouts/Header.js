import { Link } from "react-router-dom";
import NavProfilePic from "../ui/NavProfilePic";
import classes from "./Header.module.css";
import LogoutButton from "../LogoutButton";
const Header = ({ user }) => {
  if (user) {
    return (
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavProfilePic user={user} to="/profile" />
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>
        <LogoutButton className={classes.logout} />
      </header>
    );
  } else {
    return (
      <header className={classes.headerNotLoggedIn}>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    );
  }
};
export default Header;
