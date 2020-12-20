import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnBoarding from "./components/general/OnBoarding";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Navbar from "./components/general/Navbar";
import Main from "./components/general/MainPage";

import { UserContext } from "./components/user/UserContext";

function App() {
  const [user, setUser] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("jwt");
      if (token === null) {
        localStorage.setItem("jwt", "");
        token = "";
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <Navbar />
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route exact path="/" component={OnBoarding} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/main" component={Main} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
