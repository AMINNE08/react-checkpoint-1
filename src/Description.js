import React from 'react';
import product from './product';

const Description = () => (
    <p style={{
        fontSize: '1rem',
        color: '#6c757d',
        marginTop: '10px'
    }}>
        {product.description}
    </p>
);

export default Description;
