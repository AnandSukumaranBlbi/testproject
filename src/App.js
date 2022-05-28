import React from "react";
import Test from "./Components/testproject";
import Styling from "./Components/stylingStateVar";
import Heading from "./Components/headingAssignment";
import Timer from "./Components/Timer";
import "./App.css";

export default class testclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      startDate: "",
      endDate: "",
      diff: 0,
      buttonVal: "",
    };
  }

  showtimer = (e) => {
    {
      this.state.show === false
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
    console.log(this.state.show);
  };
  startTimer = (e) => {
    if (this.state.show === false) {
      this.setState(
        {
          endDate: new Date(),
        },
        function () {
          this.setState({
            endDate: new Date(),
          });
          this.setState({
            diff: (this.state.endDate - this.state.startDate) / 1000,
          });
          console.log(this.state.endDate);
        }
      );
    } else {
      this.setState({ diff: 0 });
      this.setState(
        {
          startDate: new Date(),
        },
        function () {
          this.setState({
            startDate: new Date(),
          });
          console.log(this.state.startDate);
        }
      );
    }
  };

  render() {
    console.log(this.state.show);
    return (
      <div>
        <div class="mainDivs" style={{ float: "left" }}>
          <div style={{ margin: 40 }}>
            <Heading val="Assignment 1:" />

            <Test />
          </div>
        </div>

        <div class="mainDivs" style={{ float: "left" }}>
          <div style={{ margin: 30 }}>
            <Heading val="Assignment 2:" />
            <Styling />
          </div>
        </div>
        <div class="mainDivs" style={{ float: "left" }}>
          <div style={{ margin: 5 }}>
            <Heading val="Assignment 3 and 4:" />
            Duration : {this.state.diff} Seconds
            <button onClick={this.showtimer}>Assignment 4</button>
            {this.state.show === true && <Timer startTimer={this.startTimer} />}
          </div>
        </div>
      </div>
    );
  }
}
