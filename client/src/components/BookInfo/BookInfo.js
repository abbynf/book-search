import React from 'react';

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


        </>
    )
};

export default BookInfo;