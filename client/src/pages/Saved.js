import React, { Component } from 'react';
import Header from './../components/Header';
import BookInfo from './../components/BookInfo';
import API from './../utils/API';

class Saved extends Component {

    constructor() {
        super();
        this.state = {
            // state holds database results
            savedTitles : []
        }
    }

    // component did mount hook that fetchs database for saved books
    componentDidMount(){
        API.fetchSavedBooks()
        // store in state
        .then(res => this.setState({savedTitles: res.data.data}))
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">

                <h2>Saved</h2>
                {this.state.savedTitles.map((volume) => {
                    console.log(volume);
                    return (
                        <>
                        <BookInfo image={volume.image}
                            title={volume.title}
                            author={volume.author}
                            description={volume.description}
                            />
                        <button href={volume.link} className="btn btn-primary">View</button>
                        <button className="btn btn-danger">Delete</button>
                        </>
                    )
                })}
                </div>
            </div>
        )
    }
};

export default Saved;