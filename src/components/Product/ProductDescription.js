import React from 'react';

export const ProductDescription = ({data}) => {
    const wordTransfrom = (count) => {
        if(count === 1 || (count % 10 === 1 && count > 11)) {
           return 'мышь';
        } else if(count > 1 && count < 5) {
            return 'мыши';
        } else if(count >= 5) {
            return 'мышей';
        }
    }


    return (
        <div className="product__description">
            <span><b>{data.amount}</b> порций</span>
            <span>
                <b>
                    {data.gift && data.gift.amount > 1 ? 
                        data.gift.amount + ' ' 
                    : null}
                </b>
                {wordTransfrom(data.gift.amount)} в подарок
            </span>
            {data.gift.bonus ? 
            <span className="description__bonus">{data.gift.bonus}</span> 
            : null}
        </div>
    )
}