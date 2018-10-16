import React from 'react'
import PropTypes from 'prop-types';

function TopicList (props) {
    return (
        <ul>
            {props.topics.map(topic => {
                return <li key={topic.title}>{topic.title}</li>
            })}
        </ul>
    )

}

TopicList.propTypes = {
    topics: PropTypes.array
}

export default TopicList;