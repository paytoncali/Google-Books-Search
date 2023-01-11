import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const searchPage = () => {
    return (
        <div>
            <br/>
        <Jumbotron />
            <br/>
        <SearchBar/>
            <br/>
        <SearchResults />
            
        </div>
    )
}

export default searchPage;