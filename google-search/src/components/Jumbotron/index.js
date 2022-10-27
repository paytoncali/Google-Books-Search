import React from "react";

const styles = {
    jumboStyle: {
        color: 'white',
        font: 'Georgia',
        background: '#D3D3D3',
        border: '2px solid black',
    },
    textStyle: {
        color: "black"
    }
};

function Jumbotron() {
    return (
        <div style={styles.jumboStyle} className='container'>
        <div style={{textAlign: 'center'}} className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
        <h1 className="display-4">Google Book Search</h1>
        <p style={styles.textStyle} className="lead">Search For and Save Books of Interest</p>
        </div>
        </div>
        </div>
    )
}

export default Jumbotron;