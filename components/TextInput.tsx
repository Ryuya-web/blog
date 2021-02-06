import React from 'react';

const TextInput = (props) => {
    return  (
        <input
            value={props.value}
            type={props.type}
            onChange={props.onChange}    
            className="w-56 h-10  border-gray-400 border-2" 
        />
    )
}
export default TextInput;