import React from 'react';
import useTshirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTshirt();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tshirt => <TShirt
                        tshirt={tshirt}
                        key={tshirt._id}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;