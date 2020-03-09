import React, { Component } from "react";
import MainNav from "../components/MainNav";
import BookCard from "../components/BookCard";

class SavedPage extends Component {

    render () {
        return (
            <div>
                <MainNav />
                <div className="container">
                    <BookCard/>
                </div>
            </div>
        )
    }
}

export default SavedPage;