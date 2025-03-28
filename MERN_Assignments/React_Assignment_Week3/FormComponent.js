
import React, { useState } from 'react';

const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
