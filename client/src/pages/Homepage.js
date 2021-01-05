import React, { Component } from 'react';
import BookInfo from './../components/BookInfo';
import Header from './../components/Header';
import API from './../utils/API';
import Format from './../utils/Format';

class Homepage extends Component {

    state = {
        // State to manage the search bar input
        title: "",
        // State to manage the search results
        searchResults: []
    }

    // Store search bar text input in state
    handleInputChange = (event) => {
        const text = event.target.value;

        console.log(this.state)
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
        .then(res => {
            this.setState({searchResults: res.data.items})
            console.log(res);
        })
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
                        <h2>Search</h2>
                    </div>

                    <form>
                        <div className="row mt-4">

                            {/* Search bar */}
                            <label htmlFor="title">Search for the title of the book:</label>
                        </div>
                        <div className="row mb-5">
                            <input type="text" name="title" id="title" onChange={this.handleInputChange} />

                            {/* Search button */}
                            <input type="submit" value="Submit" onClick={this.handleSubmitClick}/>
                        </div>

                    </form>

                    {/* Component for search results */}
                    {this.state.searchResults.map((data) => {
                        const info = data.volumeInfo
                        console.log(info);
                        const rightLink = Format(data.id, info.title)
                        return (
                            <BookInfo 
                                saved="false"
                                image={info.imageLinks.thumbnail}
                                title={info.title}
                                // future development, have all authors listed
                                author={info.authors[0]}
                                description={info.description}
                                link={rightLink}
                                />
                            
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default Homepage;