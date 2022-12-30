import React from "react";
import Card from 'react-bootstrap/Card';

const styles = {
    jumboStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    bodyStyle: {
        textAlign: 'center', 
    },
    titleStyle: {
        color: "#6c757d",
        fontSize: '45px',
    },
    textStyle: {
        color: "black"

    }
};

function Jumbotron() {
    return (
        <div style={styles.jumboStyle}>
            <Card style={{width: '95%'}}>
                <Card.Body style={styles.bodyStyle}> 
                    <Card.Title style={styles.titleStyle}>Google Book Search</Card.Title>
                    <Card.Text className="text-muted" style={styles.textStyle}>Search For and Save Books of Interest</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Jumbotron;