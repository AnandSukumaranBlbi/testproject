import React from "react";

export default class Styling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "",
      bgColor2: "",
    };
  }

  render() {
    var color;
    return (
      <div>
        <div
          style={{
            backgroundColor: this.state.bgColor,
            width: 500,
            height: 100,
            borderStyle: "double",
            borderColor: "black",
          }}
        >
          <h2> On-change Textbox</h2>
        </div>
        <input
          id="colorTxt1"
          style={{ width: 200 }}
          placeholder="Enter the color"
          onChange={(e) => this.setState({ bgColor: e.target.value })}
        ></input>
        <br />
        <br />

        <div>
          <div
            style={{
              backgroundColor: this.state.bgColor2,
              width: 500,
              height: 100,
              borderStyle: "double",
              borderColor: "black",
            }}
          >
            <h2> On-click Textbox</h2>
          </div>
          <input
            style={{ width: 200 }}
            id="colorTxt2"
            placeholder="Enter the color and press Submit"
            onChange={(e) => (color = e.target.value)}
          ></input>
          <input
            type="submit"
            onClick={(e) => this.setState({ bgColor2: color })}
          ></input>
        </div>
      </div>
    );
  }
}
