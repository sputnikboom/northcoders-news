import React, {Component} from 'react'
import {Link} from '@reach/router'

class Explorer extends Component {

    render() {
        return(
        <div>
            <h2>Explore</h2>
            <nav>
                <Link to="./topics">Browse Topics </Link>
                <Link to="./find-topic">Search Topics </Link>
                <Link to="./add-topic">Add New Topic</Link>
            </nav>
            {this.props.children}
            </div>
        )
    }
}

export default Explorer;