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
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    user: {},
    topic: ""
  };

  render() {
    return (
      <div className="App">
        <header>
          <Link className="home-title" to="/">
            Northcoders news
          </Link>
        </header>
        <nav>
          <SidebarButton />
          {!this.state.user.username ? (
            <Login toggleLogin={this.toggleLogin} />
          ) : (
            <div className="user-login">
              <button className="nav-button">
                <Link to={`/users/${this.state.user.username}`}>
                  My Profile
                </Link>
              </button>
              <LogOut toggleLogin={this.toggleLogin} />
            </div>
          )}
        </nav>

        <Router>
          <Home path="/" updateTopic={this.updateTopic} />
          <TopicPage
            path="/topics/:topic_slug"
            userId={this.state.user._id}
            updateTopic={this.updateTopic}
          />
          <UserProfile path="/users/:user_id" />
          <Comments path="comments" />
          <Articles path="articles" />
          <Article path="/articles/:article_id" userId={this.state.user._id} />
          <NotFound path="/error" />
          <NotFound default />

        </Router>
      </div>
    );
  }

  toggleLogin = user => {
    user ? this.setState({ user }) : this.setState({ user: {} });
  };

  updateTopic = topic => {
    this.setState({
      topic
    });
  };
}

export default App;
