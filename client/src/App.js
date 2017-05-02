import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'



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
        <ul>
          {this.state.books.map(book =>
          <li key={book._id}><img src={`./client/public/img${book.title}`} /></li>
        )}
        </ul>
      </div>
    );
  }
}




export default App;
