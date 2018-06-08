import React from "react";
import { render } from "react-dom";
import Hoc from "./Hoc";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hoc name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById("root"));
