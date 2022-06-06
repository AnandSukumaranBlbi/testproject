import React from "react";
import { BrowserRouter, Link, Route, Routes, Redirect } from "react-router-dom";
import Splice from "./splice";
import Test from "./testproject";
import Apicall from "./apiCall";
import Styling from "./stylingStateVar";
import SetTimer from "./setTimer";
import Heading from "./headingAssignment";
import imglogo from "../Images/nextstackLogo.svg";
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  setOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Grid container xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <AppBar position="static">
                  <Toolbar>
                    <Button color="inherit">
                      <Link style={{ color: "inherit" }} to="/">
                        <span class="material-symbols-outlined">
                          <Typography>NextStack Project</Typography>
                          <img src={imglogo} alt="" />
                        </span>
                      </Link>
                    </Button>

                    <Hidden lgDown="false">
                      <Box style={{ width: 150 }}></Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                      >
                        <Button
                          style={{
                            color: "inherit",
                            borderBlockStyle: "groove",
                            borderBlockColor: "grey",
                          }}
                        >
                          <Link
                            style={{ color: "inherit" }}
                            to="/assignment1_1"
                          >
                            Assignment 1 : Part 1
                          </Link>
                        </Button>
                        &nbsp;
                        <Button style={{ color: "inherit" }}>
                          <Link
                            style={{ color: "inherit" }}
                            to="/assignment1_2"
                          >
                            Assignment 1 : Part 2
                          </Link>
                        </Button>
                        &nbsp;
                        <Button style={{ color: "inherit" }}>
                          <Link style={{ color: "inherit" }} to="/assignment2">
                            Assignment 2
                          </Link>
                        </Button>
                        &nbsp;
                        <Button style={{ color: "inherit" }}>
                          <Link
                            style={{ color: "inherit" }}
                            to="/assignment3_1"
                          >
                            Assignment 3/4 : Part 1
                          </Link>
                        </Button>
                        &nbsp;
                        <Button style={{ color: "inherit" }}>
                          <Link
                            style={{ color: "inherit" }}
                            to="/assignment3_2"
                          >
                            Assignment 3/4 : Part 2
                          </Link>
                        </Button>
                        &nbsp;
                      </Typography>
                    </Hidden>
                    <Hidden lgUp="true">
                      <span
                        class="material-symbols-outlined"
                        onClick={this.handleClickOpen}
                      >
                        menu
                      </span>
                    </Hidden>
                  </Toolbar>
                </AppBar>
              </Grid>
            </Box>
            <Grid item xs={12} sm={12}>
              <Hidden lgDown="false">
                <Box
                  style={{
                    marginTop: 20,
                    width: 300,
                    marginLeft: 10,
                    height: 500,
                    float: "left",
                  }}
                ></Box>
              </Hidden>
              <Box
                class="mainDivs"
                style={{
                  marginTop: 20,
                  width: 600,
                  marginLeft: 10,
                  height: 500,
                  float: "left",
                }}
              >
                <Routes>
                  <Route
                    path="/assignment1_1"
                    element={
                      <>
                        <Heading value="Assignment 1: Part 1" />
                        <Test />
                      </>
                    }
                  />
                  <Route
                    path="/assignment1_2"
                    element={
                      <>
                        <Heading value="Assignment 1: Part 2" />
                        <Styling />
                      </>
                    }
                  />
                  <Route
                    exact
                    path="/assignment2"
                    element={
                      <>
                        <Heading value="Assignment 2" />
                        <SetTimer />
                      </>
                    }
                  />
                  <Route
                    path="/assignment3_1"
                    element={
                      <>
                        <Heading value="Assignment 3/4: Part 1" />
                        <Splice />
                      </>
                    }
                  />
                  <Route
                    path="/assignment3_2"
                    element={
                      <>
                        <Heading value="Assignment 3/4: Part 2" />
                        <Apicall />
                      </>
                    }
                  />
                </Routes>
              </Box>
            </Grid>
          </Grid>
          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-describedby="alert-dialog-slide-description"
            style={{ position: "absolute", left: 0, bottom: 0 }}
          >
            <DialogTitle>{"Menu"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
                  <List>
                    <ListItem>
                      <Button
                        style={{
                          color: "inherit",
                          borderBlockStyle: "groove",
                          borderBlockColor: "grey",
                        }}
                      >
                        <Link
                          onClick={this.handleClose}
                          style={{ color: "inherit" }}
                          to="/assignment1_1"
                        >
                          Assignment 1 : Part 1
                        </Link>
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button style={{ color: "inherit" }}>
                        <Link
                          onClick={this.handleClose}
                          style={{ color: "inherit" }}
                          to="/assignment1_2"
                        >
                          Assignment 1 : Part 2
                        </Link>
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button style={{ color: "inherit" }}>
                        <Link
                          onClick={this.handleClose}
                          style={{ color: "inherit" }}
                          to="/assignment2"
                        >
                          Assignment 2
                        </Link>
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button style={{ color: "inherit" }}>
                        <Link
                          onClick={this.handleClose}
                          style={{ color: "inherit" }}
                          to="/assignment3_1"
                        >
                          Assignment 3/4 : Part 1
                        </Link>
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button style={{ color: "inherit" }}>
                        <Link
                          onClick={this.handleClose}
                          style={{ color: "inherit" }}
                          to="/assignment3_2"
                        >
                          Assignment 3/4 : Part 2
                        </Link>
                      </Button>
                    </ListItem>
                  </List>
                </Typography>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </BrowserRouter>
      </div>
    );
  }
}
