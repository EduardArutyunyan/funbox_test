import React from 'react';

export const ProductDescription = ({data}) => {
    
    return (
        <div className="product__description">
            <span><b>{data.amount}</b> порций</span>
            <span>
                <b>{data.gift && data.gift.amount > 0
                ? data.gift.amount + ' ' 
                : null}</b>
                {data.gift.item} в подарок
            </span>
            {data.gift.bonus 
            ? <span className="description__bonus">{data.gift.bonus}</span> 
            : null}
        </div>
    )
}