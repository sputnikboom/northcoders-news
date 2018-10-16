import React, { Component } from "react";
import ArticleList from "./ArticleList";
import { getAllOfType } from "./api/get";

class Home extends Component {

    state = {
        articles: []
    }

  render() {
    return <ArticleList articles={this.state.articles}/>;
  }

  componentDidMount(){
      getAllOfType("articles").then(articles => this.setState({articles}));
  }

}

export default Home;
