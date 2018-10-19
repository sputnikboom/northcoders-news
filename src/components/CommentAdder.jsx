import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentAdder extends Component {
    state = {
        body: '',
        inputWarning: false
    }

    render(){
        return(
            <>
            {this.state.inputWarning && <div>Cannot post an empty comment!</div>}
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <textarea 
                className="comment-text"
                name="comment-body" 
                onChange={this.handleChange} 
                value={this.state.body}/>
                <button className="comment-button">Post Comment</button>
            </form>
            </>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.body) {
        this.props.addComment(this.state.body)
        this.setState({
                body: "",
                inputWarning: false,
            })
        } else this.setState({inputWarning: true});
    }

    handleChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }
}

CommentAdder.propTypes = {
    addComment: PropTypes.func.isRequired,
    userId: PropTypes.string
}


export default CommentAdder;