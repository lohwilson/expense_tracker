import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
  });

  const { username, firstName, lastName, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords do not match", "danger");
    } else {
      const newUser = {
        username,
        firstName,
        lastName,
        password,
      };

      try {
        const body = JSON.stringify(newUser);
        const response = await axios.post(
          "http://localhost:4000/user/register",
          body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      <Fragment>
        <h1>Register</h1>
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
              type="text"
              placeholder="first name"
              name="firstName"
              value={firstName}
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              value={lastName}
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
          <div>
            <input
              type="password"
              placeholder="confirm password"
              name="password2"
              value={password2}
              minLength="6"
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" value="Register" />
        </form>
      </Fragment>
      <Fragment>
        <Link to="/login">Alrady have an account? Login here!</Link>
      </Fragment>
    </Fragment>
  );
};

export default Register;
