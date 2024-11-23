import React, { useEffect, useState } from 'react';
import { addToDB, removeDB, showDB } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const handlePurchase = (id) => {
        // set to localStorage
        addToDB(id);
    }
    const handleRemove = (id) => {
        removeDB(id)
    }

    // show number of time added to cart (data on load - must be in useEffect)
    const [show, setShow] = useState(0);
    useEffect(() => {
        setShow(showDB(id))
    }, [id]);

    // show id
    const [showId, setShowId] = useState('');
    const showIdFunc = (abc) => setShowId(abc);

    return (
        <div style={{ height: 'fit-content' }} className="note">
            <p>{showId ? 'Id: ' + showId : ''}</p>

            {/* for array */}
            <p className="cart-message">{show}</p>

            {/* for object */}
            {/* <p className="cart-message">{!show ? 'Not Added to Cart' : 'Added to Cart: ' + show}</p> */}

            <p>Cosmetic Name: {name}</p>
            <p>Price: {price} taka</p>
            <button onClick={() => showIdFunc(id)} className="btn-custom btn-green">Show Id</button>
            <button onClick={() => handlePurchase(id)} className="btn-custom btn-cyan">Add To Cart</button>
            <button onClick={() => handleRemove(id)} className="btn-custom btn-yellow">Purchase</button>
        </div>
    );
};

export default Cosmetic;