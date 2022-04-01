import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

export const RingContext = createContext('ring');

const Grandpa = () => {
    const ornaments = 'diamond ring'
    const [house, setHouse] = useState(1)
    const handleBuyHouse = () => {
        setHouse(house + 1);
    }
    return (
        <RingContext.Provider value={ornaments}>
            <div className='grandpa' >
                <h3>Grandpa</h3>
                <h5>House:{house}</h5>
                <button onClick={handleBuyHouse}>Buy House</button>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;