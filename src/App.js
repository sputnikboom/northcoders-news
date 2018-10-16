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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>northcoders news</header>
        <nav>
          <SidebarButton />
          <span>Current Topic</span>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/users/123">My Profile</Link>
        </nav>

        <Router>
          <Home path="/" />
          <Explorer path="/explore">
          <TopicBrowser path="topics" />
          <TopicSearcher path="find-topic" />
          <TopicAdder path="add-topic" />
          </Explorer>
          <UserProfile path="/users/123">
            <CommentList path="comments" />
            <ArticleList path="articles" />
          </UserProfile>
        </Router>
      </div>
    );
  }
}

export default App;
