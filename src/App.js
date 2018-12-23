import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me !</h1>
        <Pet name="Luna" animal="Dog" breed="Havaneese" />
        <Pet name="Pepper" animal="Bird" breed="Cockateil" />
        <Pet name="Doink" animal="Cat" breed="Mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));

export default App;
