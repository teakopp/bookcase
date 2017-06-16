import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import {  Grid, Row, Col } from 'react-bootstrap';

// <li key={book._id}>{book.title}</li>


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    const url = '/books'
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      const books = data;
      this.setState({books})
    });
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
          {this.state.books.map(book =>
          <Col xs={2} md={1}>
            <img src={"/img/" + book.title + ".jpg"}></img>
          </Col>
          )}
          </Row>
        </Grid>
      </div>
    );
  }
}




export default App;
