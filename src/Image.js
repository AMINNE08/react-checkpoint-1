import React from 'react';
import product from './product';

const Image = () => (
    <img src={`${process.env.PUBLIC_URL}/imgproduct.jpg`} alt={product.name} style={{
        width: '100%',
        height: 'auto',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    }} />
);

export default Image;
