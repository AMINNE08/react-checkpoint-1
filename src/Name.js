import React from 'react';
import product from './product';

const Name = () => (
    <h2 style={{
        fontSize: '1.5rem',
        color: '#343a40',
        fontWeight: '600',
        margin: '10px 0'
    }}>
        {product.name}
    </h2>
);

export default Name;
