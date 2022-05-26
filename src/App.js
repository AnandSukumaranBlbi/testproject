import React from "react";
import Test from "./Components/testproject";
import Styling from "./Components/stylingStateVar";
import Heading from "./Components/headingAssignment";

export default class testclass extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Heading val="Assignment 1:" />
          <Test />
        </div>
        <br />
        <br />
        <br />
        <br />

        <div>
          <Heading val="Assignment 2:" />
          <Styling />
        </div>
      </div>
    );
  }
}
