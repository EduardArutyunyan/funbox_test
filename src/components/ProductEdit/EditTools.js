import React, { useState } from 'react';
import { ListView } from './ListView';
import './styles.scss';

export const EditTools = ({data, onDataEdit}) => {
    const [showEditTools, setShowEditTools] = useState(false);
    
    function handleProductUpdate(product) {

        let editedData = data.map(item => {
            if(item.id === product.id) {
                return product;
            } else {
                return item;
            }
        });
        
        onDataEdit(editedData);
    }

    return (
        <>
            <div 
                className="edit-tools-toggle"
                onClick={(e) => {
                    e.preventDefault();
                    setShowEditTools(!showEditTools);
                }}
            >
                Редактировать
            </div>

            <div className={"edit-tools-container" + (!showEditTools ? ' edit-tools-container_closed' : '')}>
                <div className="edit-tools__title">Список товаров:</div>
            {
                data.map(product => {
                    return (
                            <ListView 
                                key={product.id.toString()}
                                listTitle={product.title + ' ' + product.subTitle}
                                data={product}
                                onUpdate={handleProductUpdate}
                            />
                    )
                })
            }
                
            </div>
        </>
    )
}