import React from "react";
import Input from "./form.js";

var name = prompt("what is your name?");
const Welcome = (props) => {
  return (
    <div className="inputBox">
      <h2 className="userName">Hello {name}</h2>
      <i>{props.message}</i>
      <br />
      <input type="text" placeholder="enter a location" />
      <br />
      <input type="submit" />
    </div>
  );
};

export default Welcome;
