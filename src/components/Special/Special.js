import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            <p><small>Gift:{ring}</small></p>
        </div>
    );
};

export default Special;