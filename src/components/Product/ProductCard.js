import React, { useState } from 'react';
import './style.scss';


export const ProductCard = ({data}) => {
    const [productStatus, setProductStatus] = useState('default');
    
    return (
        <div className="product-card default">
            <div className="product__head-text">
                {data.headText}
            </div>
            <div className="product__title">
                {data.title}
            </div>
            <div className="product__sub-title">
                {data.subTitle}
            </div>
            <div className="product__description">
                <div className="description__amount"><b>{10}</b> порций</div>
                <div className="description__gift">
                    <b>{data.description.gift && data.description.gift.amount > 0
                    ? data.description.gift.amount + ' ' 
                    : null}</b>
                    {data.description.gift.item} в подарок</div>
            </div>
            <div className="product__volume-item">
                <span className="product__volume-item-value">{0.5}</span>
                <span className="product__volume-item-value-desc">кг</span>
            </div>
            <div className="product__link">
                <a href={'#'}></a>
            </div>
        </div>
    )
}