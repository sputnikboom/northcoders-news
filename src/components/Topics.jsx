import React from 'react'
import PropTypes from 'prop-types';
import {Link} from '@reach/router';

function Topics (props) {
    return (
        <ul>
            {props.topics.map(topic => {
                return <li key={topic.title}>
                <Link to={`/topics/${topic.slug}`}>{topic.title}</Link>
                </li>
            })}
        </ul>
    )

}

Topics.propTypes = {
    topics: PropTypes.array
}

export default Topics;