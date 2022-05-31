import React from "react";
import Test from "./Components/testproject";
import Styling from "./Components/stylingStateVar";
import Heading from "./Components/headingAssignment";
import Timer from "./Components/Timer";
import "./App.css";
import Apicall from "./Components/apiCall";
import Splice from "./Components/splice";

export default class testclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      startDate: "",
      endDate: "",
      diff: 0,
      buttonVal: "Start timer",
    };
  }

  showtimer = (e) => {
    {
      this.state.show === true
        ? this.setState({
            buttonVal: "Start Timer",
          })
        : this.setState({
            buttonVal: "Stop Timer",
          });
    }

    this.setState({
      show: !this.state.show,
    });
  };
  startTimer = (e) => {
    if (this.state.show === false) {
      this.setState(
        {
          endDate: new Date(),
        },
        function () {
          this.setState({
            diff: (this.state.endDate - this.state.startDate) / 1000,
          });
        }
      );
    } else {
      this.setState({ diff: 0 });
      this.setState({
        startDate: new Date(),
      });
    }
  };

  render() {
    return (
      <div>
        <div class="mainDivs" style={{ float: "left" }}>
          <div style={{ margin: 40 }}>
            <Heading val="Assignment 1: Part 1" />

            <Test />
          </div>
        </div>

        <div class="mainDivs" style={{ float: "left" }}>
          <div style={{ margin: 30 }}>
            <Heading val="Assignment 1: Part 2" />
            <Styling />
          </div>
        </div>
        <div class="mainDivs" style={{ float: "left" }}>
          <div style={{ margin: 5 }}>
            <Heading val="Assignment 2:" />
            Duration : {this.state.diff} Seconds
            <button onClick={this.showtimer}>{this.state.buttonVal}</button>
            {this.state.show === true && <Timer startTimer={this.startTimer} />}
          </div>
        </div>
        <div class="mainDivs" style={{ height: 400, float: "left" }}>
          <div style={{ margin: 5 }}>
            <Heading val="Assignment 3: part 1" />
            <Splice />
          </div>
        </div>
        <div class="mainDivs" style={{ height: 400, float: "left" }}>
          <div style={{ margin: 5 }}>
            <Heading val="Assignment 3: part 2" />
            <Apicall />
          </div>
        </div>
      </div>
    );
  }
}
