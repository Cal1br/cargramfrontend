import axios from "axios";
import { useRef } from "react";
import cookieCutter from "cookie-cutter";
import classes from "./LoginPage.module.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function LoginPage() {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();
  async function loginSubmitHandler(event) {
    event.preventDefault();
    const nameValue = nameInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;

    const user = {
      username: nameValue,
      password: passwordValue,
    };
    await axios.post("/user/login", user).then(
      (obj) => onSuccess(obj),
      (err) => onFailure(err)
    );
  }
  function onSuccess({ data }) {
    cookieCutter.set("token", data, {
      path: "/",
    });
    history.push("/");
  }
  function onFailure(err) {
    console.log(err.response.data.message); //we have tghe
  }
  return (
    <div>
      <h2 className={classes.h}>Login</h2>
      <form className={classes.form} onSubmit={loginSubmitHandler}>
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
          <button>Login</button>
        </div>
      </form>
      <Link className={classes.Link} to="/register">
        Don't have an account?
      </Link>
    </div>
  );
}
export default LoginPage;