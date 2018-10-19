import React, { Component } from "react";
import Articles from "./Articles";
import { getAllOfType } from "./api/get";

class Home extends Component {

    state = {
        articles: []
    }

  render() {
    return (
        <>
        <h2 className="topic-title">All Topics</h2>
    <Articles articles={this.state.articles}/>
    </>);
  }

  componentDidMount(){
      this.props.updateTopic("");
      getAllOfType("articles")
      .then(articles => this.setState({articles}))
      .catch(err => this.props.navigate('/error', {replace:true, state: {err: err.message}}))
  }

}

export default Home;
