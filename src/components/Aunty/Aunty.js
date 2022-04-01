import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h4>Aunty</h4>
            <h5>House:{house}</h5>
            <p><small>Gift:{ring}</small></p>
        </div>
    );
};

export default Aunty;