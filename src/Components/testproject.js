import React from "react";

var a = 10;
export default class test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 0,
    };
  }
  update = () => {
    a = a + 10;
    this.setState({
      num: a,
    });

    //alert(a);
  };

  render() {
    return (
      <div>
        <input value={this.state.num}></input>
        <button onClick={this.update}>Click to Add Value </button>
      </div>
    );
  }
}
