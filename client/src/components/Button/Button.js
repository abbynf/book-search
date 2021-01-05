import React from 'react';

function Button(props) {
    if (props.saved === true) {
        return (
            <div>
                <button>Delete</button>
            </div>
        )
    } else {
        return (
            <div>
                <button>Save</button>
            </div>
        )
    }
};

export default Button;