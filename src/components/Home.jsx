import React, { Component } from "react";
import Articles from "./Articles";
import { getAllOfType } from "./api/get";

class Home extends Component {

    state = {
        articles: []
    }

  render() {
    return <Articles articles={this.state.articles}/>;
  }

  componentDidMount(){
      getAllOfType("articles").then(articles => this.setState({articles}));
  }

}

export default Home;
