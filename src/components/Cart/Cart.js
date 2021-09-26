import React from 'react';

const Cart = (props) => {
    const {cart} = props

    const totalReducer=(prevValue, currentValue)=>prevValue+currentValue.Cost
    const total= cart.reduce(totalReducer, 0)

   
    // console.log(cart);
    return (
        <div>
            <h3> Choose Place: {cart.length}
            </h3>
            <h3>Total Cost:$ {total}</h3>
            <h3>Place List:</h3>
            <ul>
                {
                cart.map(place=><li>{place.Place}</li>)
                }
            </ul>
           

        </div>
    );
};

export default Cart;