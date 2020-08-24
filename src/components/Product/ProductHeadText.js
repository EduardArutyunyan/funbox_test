import React from 'react';

export const ProductHeadText = ({text, textSecond, status}) => {
    return (
        <div className="product__head-text">
            {status.indexOf('selected') !== -1 
                && status.indexOf('hover') !== -1 
                ? textSecond : text}
        </div>
    )
}