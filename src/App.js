import React, { Component } from "react";
import "./App.css";
import { Link, Router } from "@reach/router";
import SidebarButton from "./components/SidebarButton";
import Articles from "./components/Articles";
import UserProfile from "./components/UserProfile";
import Comments from "./components/Comments";
import Home from "./components/Home";
import TopicPage from "./components/TopicPage";
import Article from "./components/Article";
import Login from "./components/Login";
import LogOut from "./components/LogOut";

class App extends Component {
  state = {
    user: {}
  };

  render() {
    return (
      <div className="App">
        <header>northcoders news</header>
        <nav>
          <SidebarButton />
          <Link to="/">Home</Link>
          {!this.state.user.username ? (
            <Login toggleLogin={this.toggleLogin} />
          ) : (
            <div className="user-login">
              <Link to={`/users/${this.state.user.username}`}>My Profile</Link>{" "}
              <LogOut toggleLogin={this.toggleLogin} />
            </div>
          )}
        </nav>

        <Router>
          <Home path="/" />
          <TopicPage path="/topics/:topic_slug" userId={this.state.user._id} />
          <UserProfile path="/users/:user_id">
            <Comments path="comments" />
            <Articles path="articles" />
          </UserProfile>
          <Article path="/articles/:article_id" userId={this.state.user._id} />
        </Router>
      </div>
    );
  }

  toggleLogin = user => {
    user ? this.setState({ user }) : this.setState({ user: {} });
  };
}

export default App;
