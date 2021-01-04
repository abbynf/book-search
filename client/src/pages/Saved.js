import React, { Component } from 'react';

class Saved extends Component {

    // state holds database results

    // component did mount hook that fetchs database for saved books
        // store in state
    componentDidMount(){
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
                <h1>Saved</h1>
                {/* Header component */}
                {/* Component for saved books */}
            </div>
        )
    }
};

export default Saved;