import React from 'react';

export const ProductFooterText = ({status, footerText, subTitle, onLinkPress}) => {
    return (
        <div className="product__footer-text">
            
            {status.indexOf('default') !== -1 ? 
            <span>{footerText.defaultText + ', '}
                <span className="product__footer-text_link" 
                    onClick={() => onLinkPress()}
                >
                    купи
                </span>
            </span>
            : null }
            
            {status.indexOf('selected') !== -1 ? 
            <span>{footerText.selectedText}</span>
                : status.indexOf('disabled') !== -1 ? 
                    <span>Печалька, {subTitle} закончился.</span>
            : null}
        </div>
    )
}