import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h4>My self</h4>
            <h5>House:{house}</h5>
            <Special></Special>
        </div>
    );
};

export default MySelf;