import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentAdder extends Component {
    state = {
        body: ''
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea 
                name="comment-body" 
                onChange={this.handleChange} 
                value={this.state.target}/>
                <button>Post Comment</button>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state.body)
        this.setState({
                body: ""
            })
        
    }

    handleChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }
}

CommentAdder.propTypes = {
    addComment: PropTypes.func.isRequired
}


export default CommentAdder;