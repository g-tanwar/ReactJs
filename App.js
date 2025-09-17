import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc", key: "1" },
  "Hello World by React"
); //<!-- core react -->

// {id:"heading",xyz:"abc"} : this is nothing just attributes which are stored as Props in object

console.log(heading); // nothing just an object of js is what we also call it as react element

const root = ReactDOM.createRoot(document.getElementById("root")); //<!-- react DOM work  ROOT: root is the place where all the react stuff works everything renders inside this root-->

root.render(heading); // render just converts the object into h1 tag and putting up it in DOM

// how to do nesting in this

{
  /* <div id = "parent">
    <div id = "child">
        <h1>I am h1 tag</h1>
        <h1>I am h2 tag</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {key:"2"}, "I am h1 tag"),
    React.createElement("h1", {key:"3"}, "I am h2 tag"),
  ])
); // If we want siblings of a tag.

// what if something already exists in the place we are rendering --> It will replace the earlier content with the new one. the earlier content will be loaded but for a very short time and will be replaced


