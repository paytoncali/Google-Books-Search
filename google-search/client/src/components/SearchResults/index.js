import React from "react";
import Card from 'react-bootstrap/Card';
import BookDetails from "../BookDetails";

function SearchResults() {

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