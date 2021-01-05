import React from 'react';
import Button from './../Button';

function BookInfo(props) {

    return (
        <div className="row">
            <img src={props.image} alt="Book thumbnail"/>
            <h5>{props.title}</h5>
            <p>{props.author}</p>
            <p>{props.description}</p>
            <a class="btn btn-primary" href={props.link} role="button">View</a>
            <Button saved={props.saved}/>
        </div>
    )
};

export default BookInfo;