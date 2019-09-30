import React from 'react';

const Input = ({name, handleChange, handleKeyPress}) => {
    return (
        <input
            onChange={handleChange}
            onFocus={handleChange}
            onKeyPress={handleKeyPress}
            name={name}
            type='text'
        />
    )
};

export default Input;