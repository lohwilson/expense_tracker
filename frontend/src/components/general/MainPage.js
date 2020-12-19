import React, { useContext } from "react";
import { UserContext } from "../user/UserContext";

export default function MainPage() {
  const msg = useContext(UserContext);
  return (
    <div>
      <h1>Main</h1>
      <h2>{msg}</h2>
    </div>
  );
}
