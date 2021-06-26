import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import classes from "./RegisterPage.module.css";
import cookieCutter from "cookie-cutter";
import { useHistory } from "react-router-dom";
function RegisterPage() {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  function onSuccess({ data }) {
    cookieCutter.set("token", data, {
      path: "/",
    });
    history.push("/");
  }
  function onFailure(err) {
    console.log(err.response?.data?.message || "Network error"); //we have tghe
  }
  async function registerSubmitHandler(event) {
    event.preventDefault();
    const nameValue = nameInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    const user = {
      username: nameValue,
      password: passwordValue,
    };
    await axios.post("/user/register", user).then(
      (obj) => onSuccess(obj),
      (err) => onFailure(err)
    );
  }
  return (
    <div className={classes.register}>
      <h2 className={classes.h}>Register</h2>
      <form className={classes.form} onSubmit={registerSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" required id="username" ref={nameInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            required
            id="password"
            type="password"
            ref={passwordInputRef}
          ></input>
        </div>
        <div className={classes.buttonDiv}>
          <button>Register</button>
        </div>
      </form>
      <Link className={classes.Link} to="/">
        Already have an account?
      </Link>
    </div>
  );
}
export default RegisterPage;
