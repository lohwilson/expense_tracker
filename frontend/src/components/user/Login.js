import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
  });

  const { username, password } = formData;
  const history = useHistory();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    try {
      const body = JSON.stringify(user);
      const response = await axios.post(
        "http://localhost:4000/user/login",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      history.push("/main");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <Fragment>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={username}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              minLength="6"
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </Fragment>
      <Fragment>
        <Link to="/register">Dont have an account? Register here!</Link>
      </Fragment>
    </Fragment>
  );
}
