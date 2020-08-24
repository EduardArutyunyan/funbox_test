import React, { useState, useEffect } from 'react';
import './styles.scss';
import { ProductDescription } from './ProductDescription';
import { ProductVolume } from './ProductVolume';
import { ProductName } from './ProductName';
import { ProductHeadText } from './ProductHeadText';
import { ProductFooterText } from './ProductFooterText';

//TODO: Сделать массив, который будет хранить id выбранных 
// элементов. Что то вроде корзины. 

export const ProductCard = ({data}) => {
    const [productStatus, setProductStatus] = useState('default');
    const [hover, setHover] = useState(false);
    const [selected, setSelected] = useState(false);
    const [firstSelected, setFirstSelected] = useState(false)

    useEffect(() => {
        if(data.disabled) {
            setProductStatus('disabled')
            console.log('disabled', data.disabled)
        }
    }, []);

    useEffect(() => {
        if(!data.disabled) {
            let status = selected ? 'selected' : 'default';  
            let isHover = hover && firstSelected ? ' hover' : '';
            
            status += isHover;

            setProductStatus(status);

            if(selected && !firstSelected) {
                setFirstSelected(true)
            };
        }
    }, [selected, hover])

    const handleClick = () => {
        if(productStatus.indexOf('default') !== -1) {
            setSelected(true);
        } else {
            setSelected(false)
        }
    }

    const handleHover = () => {
        setHover(true)
    }
    
    return (
        <div className="product-card-wrap">
            <div 
                className={`product-card ${productStatus}`}
                onClick={() => handleClick()}
                onMouseOut={() => handleHover()}
                onMouseOver={() => setHover(false)}
            >
                <ProductHeadText text={data.headText} textSecond={data.headTextSecond} status={productStatus}/>
                <ProductName title={data.title} subTitle={data.subTitle}/>
                <ProductDescription data={data.description}/>
                <ProductVolume volume={data.volume}/>
                
                
            </div>
            <ProductFooterText 
                status={productStatus} 
                footerText={data.footerText}
                subTitle={data.subTitle}
                onLinkPress={handleClick}
            />
        </div>
    )
}