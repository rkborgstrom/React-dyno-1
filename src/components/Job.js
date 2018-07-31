import React from 'react';

const Job = (props) => {
    console.log(props, 'these are jobs')
        return (
            <li>
                <h4>{props.job.title}</h4>
                <small>{props.job.pay}</small>
                <p>{props.job.description}</p>
                <small>{props.job.interested}</small>
            </li>
        );
    }



export default Job;