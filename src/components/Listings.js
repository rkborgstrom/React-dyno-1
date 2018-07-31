import React from 'react';
import Job from './Job';


const Listings = (props) => {
    const listing = props.jobs.map(listing => {
        return <Job job={listing} key={listing.id} />
    }).reverse()


    return (
        <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
                {listing}
            </ul>
        </section>
    );
}



export default Listings;