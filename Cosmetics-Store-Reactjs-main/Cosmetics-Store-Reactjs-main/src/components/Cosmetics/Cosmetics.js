import React, { useEffect, useState } from 'react';
import { numsTotal, jinisTotal } from '../../utilities/reduce';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cos, setCos] = useState([]);
    useEffect(() => {
        fetch('./Cosmetics.json')
            .then(res => res.json())
            .then(data => setCos(data))
    }, []);
    console.log(numsTotal, jinisTotal);
    return (
        <div>
            <a href="/"><h1>Cosmetics Online Store</h1></a>
            <p>Total Price: {jinisTotal} taka</p>
            <div>
                {
                    cos.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.name} />)
                }
            </div>
        </div>
    );
};

export default Cosmetics;