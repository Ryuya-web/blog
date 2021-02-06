import React from 'react';

const TextArea = (props) => {
    return  (
        <textarea
            value={props.value}
            onChange={props.onChange}    
            className="w-96 h-64  border-gray-400 border-2" 
        >
        </textarea>
    )
}
export default TextArea;