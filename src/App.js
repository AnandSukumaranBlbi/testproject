import React from "react";
import Test from "./Components/testproject";
import Styling from "./Components/stylingStateVar";

export default class testclass extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>
            <u>Assignment 1:</u>
          </h2>
          <Test />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div>
          <h2>
            <u>Assignment 2:</u>
          </h2>
          <Styling />
        </div>
      </div>
    );
  }
}
