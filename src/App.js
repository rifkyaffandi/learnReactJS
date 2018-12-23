const Pet = props => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  );
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));