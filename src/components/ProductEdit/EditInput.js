import React, { useEffect, useState } from 'react';


export const EditInput = ({dataField, label, onEdit}) => {
    const [inputValue, setInputValue] = useState(dataField);

    useEffect(() => {
        onEdit(inputValue);
    }, [inputValue])

    return (
        <label className="edit-tools__label">
            <span>{label}</span>
            <input
                className="edit-tools__input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </label>
    )
}