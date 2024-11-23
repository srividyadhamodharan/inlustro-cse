import React from 'react';
import { add as addition, multiply as multiplication } from '../../utilities/calculation';

const Calculation = () => {
    const first = 55;
    const second = 110;
    const sum = addition(first, second);
    const mul = multiplication(first, second);
    return (
        <div className="note">
            <p>Summation: {sum}</p>
            <p> Multiplication: {mul}</p>
        </div>
    );
};

export default Calculation;