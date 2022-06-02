import { Grid } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

export default class Heading extends React.Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item md={12} sm={6} xs={12}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              minWidth: 300,
            }}
          >
            <Box sx={{ color: "text.secondary" }}>{this.props.val}</Box>

            <Box
              sx={{ color: "success.dark", fontSize: 16, verticalAlign: "sub" }}
            />
          </Box>
          <h2></h2>
        </Grid>
      </Grid>
    );
  }
}
