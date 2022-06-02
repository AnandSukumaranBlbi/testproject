import { Grid } from "@mui/material";
import React from "react";

export default class Heading extends React.Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item md={12} sm={6} xs={12}>
          <h2>
            <u> {this.props.val}</u>
          </h2>
        </Grid>
      </Grid>
    );
  }
}
