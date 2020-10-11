import React, { useEffect, useState } from 'react';


export const EditCheckbox = ({data, onChange}) => {
    const [checked, setChecked] = useState(data);

    useEffect(() => {
        onChange(checked);
    }, [checked]);

    return (
        <label className="edit-tools__checkbox-label">
            <span>Товар в наличии</span>
            <input
                className="edit-tools__checkbox"
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
        </label>
    )
}