import React from "react";
import Card from 'react-bootstrap/Card';
import BookDetails from "../BookDetails";

function SearchResults() {
// functionality for view button and save button
    // view will pop up a module of the book
    // save will send book data to "saved" page

    const styles = {
        ResultsStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };

    return (
        <div style={styles.ResultsStyle}>
            <Card style={{width: '95%', padding: '25px'}}>
        <Card.Subtitle>
        Results
        <BookDetails />
        </Card.Subtitle>
        </Card>
        </div>
    )
}

export default SearchResults;