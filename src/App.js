import React from "react";
import Test from "./Components/testproject";
import Styling from "./Components/stylingStateVar";
import Heading from "./Components/headingAssignment";
import Timer from "./Components/Timer";
import "./App.css";
import Apicall from "./Components/apiCall";
import Splice from "./Components/splice";
import { Box, Button, Grid, TextField } from "@mui/material";

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
      <Grid container spacing={1}>
        <Grid item md={4} sm={6} xs={12}>
          <div class="mainDivs" style={{ float: "left" }}>
            <Heading val="Assignment 1: Part 1" />

            <Test />
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div class="mainDivs" style={{ float: "left" }}>
            <Heading val="Assignment 1: Part 2" />
            <Styling />
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div class="mainDivs" style={{ float: "left" }}>
            <Heading val="Assignment 2:" />
            <Box>Duration : {this.state.diff} Seconds</Box>
            <Button variant="contained" onClick={this.showtimer}>
              <span class="material-symbols-outlined">timer </span>
              {this.state.buttonVal}
            </Button>
            {this.state.show === true && <Timer startTimer={this.startTimer} />}
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div class="mainDivs" style={{ height: 400, float: "left" }}>
            <Heading val="Assignment 3/4: part 1" />
            <Splice />
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div class="mainDivs" style={{ height: 400, float: "left" }}>
            <Heading val="Assignment 3/4: part 2" />
            <Apicall />
          </div>
        </Grid>
      </Grid>
    );
  }
}
