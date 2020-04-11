import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      zipCode: 0,
      county: "",
    };
  }

  onInputChange(e) {
    this.setState({ zipCode: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange}></input>
        <br></br>
        <div>{this.state.zipCode}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));