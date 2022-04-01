import React from 'react';

const Cart = ({ cart, handleCartButton }) => {
    // there are 4 various system to for conditional rendering
    let command;
    if (cart.length <= 0) {
        command = <p>add something to cart</p>
    }
    else {
        command = <p>you are adding</p>
    }
    return (
        <div>
            <h3>Selected Items :{cart.length}</h3>
            {
                cart.map(item => <p>
                    {item.name}
                    <button onClick={() => handleCartButton(item)}>X</button>
                </p>)
            }
            {command}
            {cart.length === 3 ? <p>you have already added 3 items</p> : <p>keep adding</p>}
            {cart.length === 2 && <div>
                <h5>Congratulations</h5>
                <p>You have added 2 items</p>
            </div>}
            {cart.length <= 3 || <button>Review your order</button>}
        </div>
    );
};

export default Cart;