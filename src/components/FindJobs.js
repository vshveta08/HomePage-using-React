import React from 'react';
import "./FindJobs.css";

const FindJobs = () => {
    return (
        <div className='FindJobs-container'>

            <label>Search Job</label>
            <input type='text' placeholder='Enter the Title'/>
        </div>
    )
}

export default FindJobs;