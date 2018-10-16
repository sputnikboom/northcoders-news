import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getListById } from './api/get';
import ArticleList from './ArticleList';

class TopicPage extends Component {

    state= {
        articles: []
    }

    render() {
        return(
            <ArticleList articles={this.state.articles}/>
        )
    }

    componentDidMount() {
        getListById(this.props.topic_slug, "topics", "articles")
        .then(articles => this.setState({ articles }), () => console.log(this.state.articles));
    }
}

TopicPage.propTypes = {
    topic_slug: PropTypes.string
}



export default TopicPage;