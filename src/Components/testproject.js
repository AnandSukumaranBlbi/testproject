import React from "react";

var a = 10;
export default class test extends React.Component {
  update = () => {
    a = a + 10;
    alert(a);
  };

  render() {
    return (
      <div>
        <button onClick={this.update}>Click to Add Value </button>
      </div>
    );
  }
}
