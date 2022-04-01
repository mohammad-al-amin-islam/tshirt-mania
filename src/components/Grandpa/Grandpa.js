import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

/* 
1.call createContext with default value
2.set a variable of the context with upprecase
3.make sure export this variable
4.wrap the child content using <RingContext.provider>
5.provide a value
to consume the context from the child component we have to use useContext hook and pass the Context name as parameter
 */
export const RingContext = createContext('ring');

const Grandpa = () => {
    const ornaments = 'diamond ring'
    const [house, setHouse] = useState(1)
    const handleBuyHouse = () => {
        setHouse(house + 1);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
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