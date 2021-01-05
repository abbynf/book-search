import React, { Component } from 'react';
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
        console.log(this.state);


        // Updating the input's state
        this.setState({
            title: text
        });
    }

    handleSubmitClick = (event) => {
        event.preventDefault();
        API.searchTitle(this.state.title)
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }

    // Function to fetch API results on click
    // store results in state

    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">

                        <h1>Homepage</h1>
                        {/* Header component */}
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
                </div>
            </div>
        )
    }
};

export default Homepage;