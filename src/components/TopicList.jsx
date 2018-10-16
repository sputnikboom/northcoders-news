import React from 'react'
import PropTypes from 'prop-types';
import {Link} from '@reach/router';

function TopicList (props) {
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

TopicList.propTypes = {
    topics: PropTypes.array
}

export default TopicList;