import React from "react";

export default class Splice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      firstname: "",
      lastname: "",
    };
  }

  txtFirstNameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };
  txtLastNameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  pushData = () => {
    var u = this.state.names;
    u.push({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
    });
    this.setState({
      names: u,
    });
  };

  showNames = (name, index) => {
    return (
      <div>
        <b>Index:</b> {index}&nbsp; <b>Firstname:</b> {name.firstname}&nbsp;
        <b>lastname:</b> {name.lastname}&nbsp;
        <button onClick={this.splice} value={index}>
          X
        </button>
      </div>
    );
  };
  splice = (e) => {
    var a = this.state.names;
    a.splice(e.target.value, 1);
    this.setState({ names: a });
  };

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>Firstname:</td>
            <td>
              <input onChange={this.txtFirstNameChange}></input>
            </td>
          </tr>
          <tr>
            <td>Lastname:</td>
            <td>
              <input onChange={this.txtLastNameChange}></input>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={this.pushData}>Submit</button>
            </td>
          </tr>
        </table>

        {this.state.names.map(this.showNames)}
      </div>
    );
  }
}
