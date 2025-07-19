import { useState } from "react";
import "./App.css";
/*
const welcome = {
  greeting: "Hey",
  title: "Ben!",
};
*/

function getTitle(title) {
  return title;
}

function App() {
  // you can do calculations and stuff here
  const title = "React!";
  return (
    <div>
      <h1>Hey there, {getTitle("Ben!")}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
