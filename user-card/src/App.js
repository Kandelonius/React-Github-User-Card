import React from "react";
import axios from "axios";
import './App.css';

const url = 'https://api.github.com/users/Kandelonius';

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor")
    this.state = {
      gitUser: ""
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        console.log(res);
      })
      .catch(err =>
        console.log(err)
      );
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
