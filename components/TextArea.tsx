import React from 'react';

const TextArea = (props) => {
    return  (
        <textarea
            value={props.value}
            onChange={props.onChange}    
            className="md:w-96 md:h-64 w-64 h-40 border-gray-400 border-2" 
        >
        </textarea>
    )
}
export default TextArea;