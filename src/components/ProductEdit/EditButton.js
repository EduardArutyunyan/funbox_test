import React from 'react';

export const EditButton = ({title, onButtonClick}) => {
    return (
        <div 
            className="edit-tools__button"
            onClick={(e) => {
                e.preventDefault();
                onButtonClick();
            }}
        >
            {title}
        </div>
    )
}