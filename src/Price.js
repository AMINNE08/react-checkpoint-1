import React from 'react';
import product from './product';

const Price = () => (
    <p style={{
        fontSize: '1.2rem',
        color: '#007bff',
        margin: '5px 0'
    }}>
        {product.price}
    </p>
);

export default Price;
