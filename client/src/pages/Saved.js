import React, { Component } from 'react';
import Header from './../components/Header';
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
                <h2>Saved</h2>
                {/* Component for saved books */}
            </div>
        )
    }
};

export default Saved;