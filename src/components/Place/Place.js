import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Tour from '../Tour/Tour';
import './Place.css'
const Place = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([]);


    const handleAddPlace=(places)=>{
        const newCart =[...cart,places]
        
        setCart(newCart)
        // console.log(newCart);
    }

    


    useEffect(() =>{
        fetch('./Tour.JSON')
        .then(res => res.json())
        .then(data => setPlaces(data));
    }, [])
    return (
        <div>
         <div className="row mt-3">
                <div className="col-md-9">

                    <div className="row">
                    {
                        places.map(places=><Tour
                        places={places}
                        handleAddPlace={handleAddPlace}
                        ></Tour>)
                    }

                            
                    </div>
            
                            
                    </div>
                    <div className="col-md-3">
                          <Cart
                          cart={cart}
                          ></Cart>
                </div>
         </div>
        </div>
       
    );
};

export default Place;