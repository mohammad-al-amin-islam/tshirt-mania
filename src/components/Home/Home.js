import React, { useState } from 'react';
import useTshirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTshirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = selectedItem => {
        const added = cart.find(item => item._id === selectedItem._id);
        if (!added) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('already added');
        }

    }
    const handleCartButton = deletedItem => {
        const rest = cart.filter(item => item._id !== deletedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tshirt => <TShirt
                        tshirt={tshirt}
                        key={tshirt._id}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleCartButton={handleCartButton}
                    key={cart._id}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;