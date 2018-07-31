import React from 'react';

const Post = (props) => {
    console.log(props)
    return (
        <li>
            <h4>title</h4>
            <small>pay</small>
            <p>description</p>
            <small>dinos are interested in this job</small>
        </li>
    )
}

export default Post;