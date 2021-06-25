import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import cookieCutter from "cookie-cutter";
import { Route, Switch } from "react-router-dom";
function RegisterCheck(props) {
  function isRegistered() {
    const token = cookieCutter.get("token");
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }
  if (isRegistered()) {
    console.log("registered!");
    return props.children;
  } else {
    console.log("NOT registered!");
    return (
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    );
  }
}
export default RegisterCheck;
