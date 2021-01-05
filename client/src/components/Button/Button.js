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
                <button className="btn btn-success">Save</button>
        )
    }
};

export default Button;