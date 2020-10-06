import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Card from './components/Card'

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: [],
      avatar: [],
      repos: [],
      followers: [],
      following: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/melissa-24")
      .then((res) => res.json())
      .then((userData) => {
        console.log("User Data", userData);
        this.setState({ name: userData.name });
        this.setState({ avatar: userData.avatar_url });
        this.setState({ repos: userData.public_repos });
        this.setState({ followers: userData.followers });
        this.setState({ following: userData.following})
        

      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="profile">
        <img className="profile-pic" src={this.state.avatar} />
        <div className="profile-bottom">
          <p> Name: {this.state.name}</p>
          <p> Repo: {this.state.repos}</p>
          <p> followers: {this.state.followers} </p>
          <p> following: {this.state.following} </p>
        </div>
        <Card />
      </div>
    );
  }
}

export default App;