import React from "react";
import Card from 'react-bootstrap/Card';

function SavedResults() {
    // functionality for view button and del button
    // view will pop up a module of the book
    // delete will remove book data from "saved" page
    
    const styles = {
        SavedStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };

    return (
        <div style={styles.SavedStyle}>
        <Card style={{width: '95%', padding: '25px'}}>
        <Card.Subtitle>
        Saved
        {/* render book details here */}
        </Card.Subtitle>
        </Card>
        </div>
    )
}

export default SavedResults;