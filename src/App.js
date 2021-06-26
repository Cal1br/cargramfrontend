import { Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import CarsPage from "./components/pages/CarsPage";
import ViewProfile from "./components/pages/ViewProfile";
import RegisterCheck from "./components/layouts/RegisterCheck";
import axios from "axios";
import React, { useState, useEffect } from "react";
import cookieCutter from "cookie-cutter";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (cookieCutter.get("token")) {
      axios.get("/user/currentuser").then(({ data }) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <Layout user={user}>
      <RegisterCheck>
        <Switch>
          <Route path="/" exact>
            <HomePage user={user} />
          </Route>
          <Route path="/profile">
            <ProfilePage user={user} />
          </Route>
          <Route path="/cars">
            <CarsPage user={user} />
          </Route>
          <Route path={"/viewprofile/:username"}>
            <ViewProfile />
          </Route>
        </Switch>
      </RegisterCheck>
    </Layout>
  );
}

export default App;
