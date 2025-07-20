import { useState } from "react";
import "./App.css";
/*
const welcome = {
  greeting: "Hey",
  title: "Ben!",
};
*/

const list = [
  {
    title: "React",
    url: "https://react.dev",
    author: "Ghazghkull",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Kaptain Badrukk",
    num_comments: 5,
    points: 5,
    objectID: 1,
  },
];

function getTitle(title) {
  return title;
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  // you can do calculations and stuff here
  const title = "React!";
  return (
    <div>
      <h1>My Orky Waaagh Stories</h1>
      <Search />
      <hr />

      <List />
    </div>
  );
}

export default App;
