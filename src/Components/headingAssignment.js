import React from "react";

export default class Heading extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <u> {this.props.val}</u>
        </h2>
        <br />
      </div>
    );
  }
}
