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
  Divider,
  Drawer,
  Fab,
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
  Skeleton,
  Slide,
  Tab,
  Tabs,
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
    this.state = { open: false, value: 0 };
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

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  a11yProps = (index) => {
    return {
      id: `action-tab-${index}`,
      "aria-controls": `action-tabpanel-${index}`,
    };
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Grid container xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <AppBar class="appBar" position="static">
                  <Toolbar>
                    <Button color="inherit">
                      <Link style={{ color: "inherit" }} to="/">
                        <span class="material-symbols-outlined">
                          <img src={imglogo} alt="" />
                          <Typography fontFamily={"Segoe UI Emoji"}>
                            <b>N</b>ext<b>S</b>tack Project
                          </Typography>
                        </span>
                      </Link>
                    </Button>

                    <Hidden lgDown="false">
                      <Box style={{ width: 120 }}></Box>
                      {/* <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                      >
                        <Tab label="Item One" {...this.a11yProps(0)} />
                        <Tab label="Item Two" {...this.a11yProps(1)} />
                      </Tabs> */}
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                      >
                        <Link style={{ color: "inherit" }} to="/assignment1_1">
                          <Fab variant="extended" style={{ borderRadius: 1 }}>
                            Assignment 1 : Part 1
                          </Fab>
                        </Link>
                        &nbsp;
                        <Link style={{ color: "inherit" }} to="/assignment1_2">
                          <Fab variant="extended" style={{ borderRadius: 1 }}>
                            Assignment 1 : Part 2
                          </Fab>
                        </Link>
                        &nbsp;
                        <Link style={{ color: "inherit" }} to="/assignment2">
                          <Fab variant="extended" style={{ borderRadius: 1 }}>
                            Assignment 2
                          </Fab>
                        </Link>
                        &nbsp;
                        <Link style={{ color: "inherit" }} to="/assignment3_1">
                          <Fab variant="extended" style={{ borderRadius: 1 }}>
                            Assignment 3/4 : Part 1
                          </Fab>
                        </Link>
                        &nbsp;
                        <Link style={{ color: "inherit" }} to="/assignment3_2">
                          <Fab variant="extended" style={{ borderRadius: 1 }}>
                            Assignment 3/4 : Part 2
                          </Fab>
                        </Link>
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
                <Divider />
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
              <Paper
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
                    path="/"
                    element={
                      <>
                        {/* <Heading value="Home" /> */}
                        <Skeleton variant="text" width={600} height={30} />
                        <Skeleton variant="circular" width={70} height={70} />
                        <Skeleton
                          variant="rectangular"
                          width={600}
                          height={400}
                        />
                      </>
                    }
                  />
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
              </Paper>
            </Grid>
          </Grid>

          {/* <Drawer
            anchor={this.state.open}
            open={this.state.open}
            onClose={this.handleClose}
          >
            <List>
              <ListItem>1</ListItem>
              <ListItem>2</ListItem>
              <ListItem>3</ListItem>
            </List>
          </Drawer> */}

          <Dialog
            open={this.state.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-describedby="alert-dialog-slide-description"
            style={{ position: "absolute", left: 0, bottom: 0 }}
          >
            <DialogTitle style={{ margin: "auto", color: "inherit" }}>
              {"Menu"}
            </DialogTitle>
            <Divider />
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
                    <Divider />
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
                    <Divider />
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
                    <Divider />
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
                    <Divider />
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
                    <Divider />
                  </List>
                </Typography>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </BrowserRouter>
        <br />
        <br />
        <Divider />
      </div>
    );
  }
}
