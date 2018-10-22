import React, { Component } from "react";
import "./App.css";
import { Link, Router } from "@reach/router";
import Articles from "./components/Articles";
import UserProfile from "./components/UserProfile";
import Comments from "./components/Comments";
import Home from "./components/Home";
import TopicPage from "./components/TopicPage";
import Article from "./components/Article";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";

class App extends Component {
  state = {
    user: {},
    topic: ""
  };

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <header>
          <Link className="home-title" to="/">
            Northcoders news
          </Link>
        </header>
        <Navigation
          username={user.username || ""}
          toggleLogin={this.toggleLogin}
        />
        <Router>
          <Home path="/" updateTopic={this.updateTopic} />
          <TopicPage
            path="/topics/:topic_slug"
            userId={user._id}
            updateTopic={this.updateTopic}
          />
          <UserProfile path="/users/:user_id" />
          <Comments path="comments" />
          <Articles path="articles" />
          <Article path="/articles/:article_id" userId={user._id} />
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
