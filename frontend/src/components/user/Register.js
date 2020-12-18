import React, { Fragment, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  // const [values, handleChange, handleSubmit] = useForm({
  //   email: "",
  //   password: "",
  //   firstName: "",
  // });

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
      console.log("passwords do not match");
    } else {
      const newUser = {
        username,
        firstName,
        lastName,
        password,
      };

      try {
        const body = JSON.stringify(newUser);
        const response = await axios.post("/user/register", body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      {/* <h1>Register</h1>
      <>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </> */}
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
}
