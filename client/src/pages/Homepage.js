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
        })
        .catch(err => console.log(err))
    }

    handleSaveClick = (event) => {
        event.preventDefault();
        const chosenVolume = this.state.searchResults.filter(result => result.id === event.target.value);
    }


    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">

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
                        const rightLink = Format(data.id, info.title)
                        return (
                            <>
                            <BookInfo 
                                key={data.id}
                                image={info.imageLinks.thumbnail}
                                title={info.title}
                                // future development, have all authors listed
                                author={info.authors[0]}
                                description={info.description}
                                link={rightLink}
                                />
                                <div className="row">
                                <div className="col">
                                    <a className="btn btn-primary" href={rightLink} role="button">View</a>
                                    <button className="btn btn-success" onClick={this.handleSaveClick} value={data.id}>Save</button>
                
                                </div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default Homepage;