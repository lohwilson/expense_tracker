import React from "react";
import { Route, Switch } from "react-router-dom";
import OnBoarding from "./general/OnBoarding";
import Expense from "./expense/Expense";

export default function Content() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={OnBoarding} />
        <Route path="/expense/:id" component={Expense} />
      </Switch>
    </React.Fragment>
  );
}
