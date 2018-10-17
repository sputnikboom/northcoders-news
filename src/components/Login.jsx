import React, {Component} from 'react'
import { getOneById } from './api/get';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        username: 'jessjelly'
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
                <button>Log In</button>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        getOneById(this.state.username, "user")
        .then(user => this.props.toggleLogin(user));
    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

}

Login.propTypes = {
    toggleLogin: PropTypes.func.isRequired
}

export default Login;