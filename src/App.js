import React, { Component } from "react";
import "./App.css";
import { Link, Router } from "@reach/router";
import SidebarButton from "./components/SidebarButton";
import ArticleList from "./components/ArticleList";
import Explorer from "./components/Explorer";
import UserProfile from "./components/UserProfile";
import CommentList from "./components/CommentList";
import TopicBrowser from "./components/TopicBrowser";
import TopicSearcher from "./components/TopicSearcher";
import TopicAdder from "./components/TopicAdder";
import Home from "./components/Home";
import TopicPage from "./components/TopicPage";

class App extends Component {

  state = {
    currentUser: {id: "bb0d890e236586b6d14e2c1", username: "jessjelly"}
  }

  render() {
    return (
      <div className="App">
        <header>northcoders news</header>
        <nav>
          <SidebarButton />
          <span>Current Topic</span>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to={`/users/${this.state.currentUser.username}`}>My Profile</Link>
        </nav>

        <Router>
          <Home path="/" />
          <TopicPage path="/topics/:topic_slug" />
          <Explorer path="/explore">
            <TopicBrowser path="topics" />
            <TopicSearcher path="find-topic" />
            <TopicAdder path="add-topic" />
          </Explorer>
          <UserProfile path="/users/:user_id">
            <CommentList path="comments" />
            <ArticleList path="articles" />
          </UserProfile>
        </Router>
      </div>
    );
  }
}

export default App;
