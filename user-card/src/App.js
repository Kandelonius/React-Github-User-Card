import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
import './App.css';

const url = 'https://api.github.com/users/Kandelonius';

class App extends React.Component {
  constructor() {
    super();
    // console.log("constructor");
    this.state = {
      gitUser: [],
      gitFollowers: []
    };
  }

  // componentDidMount() {
  //   console.log("cDM");
  //   axios
  //     .get(url)
  //     .then(res => {
  //       console.log("ouch");
  //       this.setState({ gitUser: res.data });
  //       axios
  //         .get(`${url}/followers`)
  //         .then(response => {
  //           console.log("ouch 2");
  //           // console.log("followers ",response.data);
  //           this.setState({ gitFollowers: response.data });
  //         })
  //         .catch(err =>
  //           console.log(err)
  //         );
  //       // console.log(res);
  //     })
  //     .catch(err =>
  //       console.log(err)
  //     );
  // }

  // componentDidUpdate(prevProps, prevState) {
  //     console.log("cDU");
  //     if(this.state.)
  //     axios
  //       .get(`${url}/followers`)
  //       .then(res => {
  //         this.setState({ gitFollowers: res.data });
  //         console.log("followers ",res);
  //       })
  //       .catch(err =>
  //         console.log(err)
  //       );
  // }
  render() {
    // debugger
    // console.log("followers ", this.state.gitFollowers)
    return (
      <div className="App">
        <UserCard information={this.state.gitUser} />
        {
          this.state.gitFollowers.map(follower => {
            return (
              <FollowerCard key={follower.id} details={follower} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
