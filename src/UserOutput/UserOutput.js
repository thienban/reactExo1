import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I'm {props.name}</p>
        </div>
    );
};

export default userOutput;