import React, { Component } from 'react';
import Header from './../components/Header';

class Saved extends Component {

    // state holds database results

    // component did mount hook that fetchs database for saved books
        // store in state
    componentDidMount(){
        // change function to util function
        async function fetchSavedBooks() {
            try {
                const response = await fetch('/api/books');
                const data = await response.json();
                console.log({ data })
            } catch (err) {
                console.log({ err })
            }
        }
        fetchSavedBooks();
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Saved</h2>

                {/* Component for saved books */}
            </div>
        )
    }
};

export default Saved;