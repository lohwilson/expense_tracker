import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Fragment>
      <div>
        <h1>Expense Tracker</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
