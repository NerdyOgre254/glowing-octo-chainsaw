import { useState } from "react";
import "./App.css";

const welcome = {
  greeting: "Hey",
  title: "Ben!",
};

function App() {
  // you can do calculations and stuff here
  const title = "React!";
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
