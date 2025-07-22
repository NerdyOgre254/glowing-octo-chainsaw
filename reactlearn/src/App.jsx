import * as React from "react";
import { useState } from "react";
import "./App.css";
/*
const welcome = {
  greeting: "Hey",
  title: "Ben!",
};
*/

const getTitle = (title) => {
  return title;
};

const Search = (props) => {
  console.log("Search Renders");
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

const List = (props) => (
  <ul>
    {console.log("List Renders")}
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    {console.log("Item Renders")}
    <span>
      <a href={props.item.url}>{props.item.title} </a>
    </span>
    <span>{props.item.author} </span>
    <span>{props.item.num_comments} </span>
    <span>{props.item.points} </span>
  </li>
);

const App = () => {
  // you can do calculations and stuff here
  const title = "React!";
  console.log("App Renders");
  const stories = [
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

  //A
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Orky Waaagh Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />

      <List list={stories} />
    </div>
  );
};

export default App;
