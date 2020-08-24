import React from 'react';

export const ProductVolume = ({volume}) => {
    return (
        <div className="product__volume-item">
            <span className="product__volume-item-value">
                {volume}
            </span>
            <span className="product__volume-item-value-desc">кг</span>
        </div>
    )
}