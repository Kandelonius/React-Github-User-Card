import React from "react";
import axios from "axios";
import UserCard from "./components/userCard";
import './App.css';

const url = 'https://api.github.com/users/Kandelonius';

class App extends React.Component {
  constructor() {
    super();
    console.log("constructor")
    this.state = {
      gitUser: [],
      gitFollowers: []
    };
  }
  componentDidMount() {
    console.log("cDM");
    axios
      .get(url)
      .then(res => {
        this.setState({ gitUser: res.data });
        // console.log(res);
      })
      .catch(err =>
        console.log(err)
      );
  }

  render() {
    return (
      <div className="App">
        <UserCard information={this.state.gitUser} />
      </div>
    );
  }
}

export default App;
