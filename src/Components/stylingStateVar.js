import React from "react";

export default class Styling extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "",
      bgColor2: "",
    };
  }

  setColor = (e) => {
    this.setState({ bgColor: e.target.value });
  };

  render() {
    var color;
    return (
      <div>
        <div style={{ float: "left" }}>
          <div
            style={{
              backgroundColor: this.state.bgColor,
              width: 150,

              borderStyle: "double",
              borderColor: "black",
            }}
          >
            <h2> Onchange Textbox</h2>
          </div>
          <input
            id="colorTxt1"
            style={{ width: 150 }}
            placeholder="Enter the color"
            onChange={this.setColor}
          ></input>
        </div>

        <div style={{ float: "right" }}>
          <div
            style={{
              backgroundColor: this.state.bgColor2,
              width: 150,
              height: 100,
              borderStyle: "double",
              borderColor: "black",
            }}
          >
            <h2> On-click Textbox</h2>
          </div>
          <input
            style={{ width: 150 }}
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
