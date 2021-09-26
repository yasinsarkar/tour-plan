import React from 'react';

const Cart = (props) => {
    const {cart} = props

    const totalReducer=(prevValue, currentValue)=>prevValue+currentValue.Cost
    const total= cart.reduce(totalReducer, 0)

   
    return (
        <div>
            <h3>Place List: {cart.length}
            </h3>
            <h3>Total Cost:$ {total}</h3>
            <h3>Place Name:</h3>
            <ul>
                {
                cart.map(place=><li>{place.Place}</li>)
                }
            </ul>
           

        </div>
    );
};

export default Cart;