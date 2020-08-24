import React from 'react';

export const ProductName = ({title, subTitle}) => {
    return (
        <React.Fragment>
            <div className="product__title">
                {title}
            </div>
            <div className="product__sub-title">
                {subTitle}
            </div>
        </React.Fragment>
    )
}