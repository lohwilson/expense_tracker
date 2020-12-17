import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OnBoarding from "./components/general/OnBoarding";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={OnBoarding} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
