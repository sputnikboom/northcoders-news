import React, { Component } from "react";
import "./App.css";
import { Link, Router } from "@reach/router";
import SidebarButton from "./components/SidebarButton";
import Articles from "./components/Articles";
import Explorer from "./components/Explorer";
import UserProfile from "./components/UserProfile";
import Comments from "./components/Comments";
import TopicSearcher from "./components/TopicSearcher";
import TopicAdder from "./components/TopicAdder";
import Home from "./components/Home";
import TopicPage from "./components/TopicPage";
import Article from "./components/Article";

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
            <TopicSearcher path="find-topic" />
            <TopicAdder path="add-topic" />
          </Explorer>
          <UserProfile path="/users/:user_id">
            <Comments path="comments" />
            <Articles path="articles" />
          </UserProfile>
          <Article path="/articles/:article_id"/>
        </Router>
      </div>
    );
  }
}

export default App;
