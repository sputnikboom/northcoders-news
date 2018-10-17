import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TopicAdder extends Component {
    
    state = {
        title: '',
        body: ''
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input name="title" type="text" onChange={this.handleChange} value={this.state.title}/>
                <label>Article:</label>
                <textarea name="body" onChange={this.handleChange} value={this.state.body}></textarea>
                <button>Add Article</button>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addArticle(this.state.body, this.state.title)
        this.setState({
                body: '',
                title: ''
            })
        }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

}

TopicAdder.propTypes = {
    addArticle: PropTypes.func.isRequired
}

export default TopicAdder;