import React, { Component } from 'react';
import BookInfo from './../components/BookInfo';
import Header from './../components/Header';
import API from './../utils/API';

class Homepage extends Component {

    state = {
        // State to manage the search bar input
        title: "",
        // State to manage the search results
        searchResults: {}
    }

    // Store search bar text input in state
    handleInputChange = (event) => {
        const text = event.target.value;

        // Updating the input's state
        this.setState({
            title: text
        });
    }

    // Function to fetch API results on click
    handleSubmitClick = (event) => {
        event.preventDefault();
        API.searchTitle(this.state.title)
        // store results in state
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">

                        {/* Header component */}
                        <Header />
                    </div>
                    <div className="row">
                        <h2>Homepage</h2>
                    </div>

                    <form>
                        <div className="row">

                            {/* Search bar */}
                            <label htmlFor="title">Title:</label>
                        </div>
                        <div className="row">
                            <input type="text" name="title" id="title" onChange={this.handleInputChange} />

                            {/* Search button */}
                            <input type="submit" value="Submit" onClick={this.handleSubmitClick}/>
                        </div>

                    </form>

                    {/* Component for search results */}
                    <BookInfo saved="false"/>
                </div>
            </div>
        )
    }
};

export default Homepage;