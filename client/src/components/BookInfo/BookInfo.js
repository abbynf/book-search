import React from 'react';
import Button from './../Button';

function BookInfo(props) {

    return (
        <>
            <hr />

            <div className="row">
                <div className="col">
                    <img src={props.image} alt="Book thumbnail" />

                </div>
                <div className="col">
                    <h5>{props.title}</h5>
                    <p>{props.author}</p>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a className="btn btn-primary" href={props.link} role="button">View</a>
                    <Button saved={props.saved} />

                </div>
            </div>

        </>
    )
};

export default BookInfo;