import React from 'react';

const Cart = ({ cart, handleCartButton }) => {
    return (
        <div>
            <h3>Selected Items :{cart.length}</h3>
            {
                cart.map(item => <p>
                    {item.name}
                    <button onClick={() => handleCartButton(item)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;