import React, { Component } from 'react';
import BookInfo from './../components/BookInfo';
import Header from './../components/Header';
import API from './../utils/API';

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
                this.setState({ searchResults: res.data.items })
            })
            .catch(err => console.log(err))
    }

    handleSaveClick = (event) => {
        event.preventDefault();
        const chosenVolume = this.state.searchResults.filter(result => result.id === event.target.value);
        console.log(chosenVolume);
        API.saveTitle(chosenVolume)
            .then(res => {
                if (res.status === 200) {
                    window.alert("Successfully saved!")
                }
            })
            .catch(err => console.log(err))
    }

    listAuthors = (authorArray) => {
        if (authorArray){
            let authorString = authorArray[0];
            for (let i=1; i< authorArray.length; i++){
                authorString = authorString + ", " + authorArray[i]
            }
            return authorString;
        } else {
            return "Anonymous"
        }
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
                            <input type="submit" value="Submit" onClick={this.handleSubmitClick} />
                        </div>

                    </form>

                    {/* Component for search results */}
                    {this.state.searchResults.map((data) => {
                        console.log(data)
                        const info = data.volumeInfo
                        const authors = this.listAuthors(info.authors);
                        return (
                            <div key={data.id}>

                                <BookInfo key={data.id}
                                    image={info.imageLinks.thumbnail}
                                    title={info.title}
                                    author={authors}
                                    description={info.description}
                                />
                                <div className="row" key={data.id + "div1"}>
                                    <div className="col" key={data.id + "div2"}>
                                    <a className="btn btn-primary" href={info.infoLink} role="button" key={data.id+ "view1"}>View</a>
                                    <button className="btn btn-success" onClick={this.handleSaveClick} value={data.id} key={data.id + "button"}>Save</button>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        )
    }
};

export default Homepage;