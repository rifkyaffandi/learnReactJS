import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "Adopt Me !"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havaneese"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockateil"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    );
  }
}

render(React.createElement(App), document.getElementById("root"));

export default App;
