import React, { Component } from "react";
import "./App.css";
import { Link } from "@reach/router";
import SidebarButton from "./components/SidebarButton";
import ArticleList from "./components/ArticleList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>northcoders news</header>
        <nav>
          <SidebarButton />
          <span>Current Topic</span>
          <Link to="/explore">Explore</Link>
          <Link to="/users/:user_id">My Profile</Link>
        </nav>
        <ArticleList />
      </div>
    );
  }
}

export default App;
