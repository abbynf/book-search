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

    handleDeleteClick = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        API.deleteBook(event.target.value)
        .then(res => {
            if (res.status === 200){
                window.alert("Successfully deleted!")
            }
            const removeId = this.state.savedTitles.filter((volume) => volume._id !== event.target.value);
            this.setState({savedTitles: removeId})
        })
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
                <Header />
                <div className="container mb-5">

                <h2>Saved</h2>
                {this.state.savedTitles.map((volume) => {
                    const authorsInString = this.listAuthors(volume.author)
                    console.log(volume);
                    return (
                        <div key={volume._id}>
                        <BookInfo 
                            key={volume._id + "bookinfo"}
                            image={volume.image}
                            title={volume.title}
                            author={authorsInString}
                            description={volume.description}
                            />
                        <button href={volume.link} className="btn btn-primary">View</button>
                        <button className="btn btn-danger" onClick={this.handleDeleteClick} value={volume._id}>Delete</button>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
};

export default Saved;