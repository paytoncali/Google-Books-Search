import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function SearchBar() {

    const styles = {
        SearchBarStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };

  return (
    <div style={styles.SearchBarStyle}>
    <Card style={{width: '95%'}}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Search for a Book:
          </p>
      <InputGroup className="mb-3">
       <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search by Title or Author"
        />
        <Button variant="secondary">Search</Button>
      </InputGroup>
        </blockquote>
      </Card.Body>
    </Card>
    </div>
  );
}

export default SearchBar;