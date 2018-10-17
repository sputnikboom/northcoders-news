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
          <span>Current Topic</span>
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          {!this.state.user.username ? (
            <Login toggleLogin={this.toggleLogin} />
          ) : (
            <>
            <Link to={`/users/${this.state.user.username}`}>My Profile</Link>
            <LogOut toggleLogin={this.toggleLogin}/>
            </>
          )}
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
          <Article path="/articles/:article_id"  userId={this.state.user._id} />
        </Router>
      </div>
    );
  }

  toggleLogin = user => {
    user ? this.setState({ user }) : this.setState({ user: {} });
  };
}

export default App;
